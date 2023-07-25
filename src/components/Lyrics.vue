<template>
  <div class="lyrics-wrapper" :style="'height:'+containerHeight+'px;'">
    <div class="lyrics-container" ref="container">
      <div class="lyrics-line" v-for="(value, key) in lyrics" :key="key" :class="{ 'lyrics-active': activeLine == key }"
        >{{ value.trim() }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lyrics: {
      type: Object,
      default: { 0: "暂无歌词" }
    },
    currentTime: {
      type: Number,
      required: true,
    },
    lineHeight: {
      type: Number,
      default: 30,
    },
    containerHeight: {
      type: Number,
      default: 250,
    },
  },
  data() {
    return { lastNumber: 0 }
  },
  computed: {
    activeLine() {
      const { lyrics, currentTime } = this;
      const lastIndex = lyrics.length - 1;

      // 如果 currentTime 大于最后一行的时间，激活最后一行
      //   if (currentTime >= lyrics[lastIndex].time) {
      //     return lastIndex;
      //   }

      // 查找当前时间所在的行
      if (lyrics.length === 0) {

      } else {
        let number = Number(currentTime.toFixed());
        if (lyrics[number] !== undefined && lyrics[number] !== "") {
          this.lastNumber = number;
          return number;
        } else {
          return this.lastNumber;
        }

      }

      return 0;
    }
  },
  watch: {
    activeLine(val) {
      if (val !== -1) {
        this.$nextTick(() => {
          this.scrollToActiveLine();
        });
      }
    },
  },
  methods: {
    scrollToActiveLine() {
      const { activeLine, lineHeight } = this;
      const container = this.$refs.container;
      const lineEl = this.$el.querySelector('.lyrics-active');

      if (lineEl && container) {
        const offsetTop = lineEl.offsetTop;
        container.scrollTop = offsetTop - lineHeight * 4 + 8;
      }
    },
  },
};
</script>

<style>
.lyrics-container {
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  scrollbar-width: none;
  padding: 50% 24px;
}

.lyrics-container::-webkit-scrollbar {
  display: none;
}

.lyrics-line {
  font-size: 16px;
  margin-bottom: 10px;
  text-align: left;
  white-space: pre-wrap;
}

.lyrics-active {
  font-weight: bold;
  font-size: 20px;
}

.lyrics-wrapper {
  width: 100%;
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  margin: 10px 0;
  background: #80808020;
  backdrop-filter: blur(60px);
}
</style>