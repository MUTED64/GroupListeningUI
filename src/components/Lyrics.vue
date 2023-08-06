<template>
  <div style="width:100%;">
    <div class="flex-title">歌词</div>
    <div class="lyrics-wrapper" :style="'height:' + containerHeight + 'px;'">
      <div class="lyrics-container" ref="container">
        <div class="lyrics-line" v-for="(value, key) in finalLyrics" :key="key"
          :class="{ 'lyrics-active': activeLine == key }">{{ value.trim() }}</div>
      </div>
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
    },
    finalLyrics() {
      if (!this.lyrics) {
        return { 0: "暂无歌词" }
      } else if (JSON.stringify(this.lyrics).indexOf("纯音乐，请欣赏") !== -1) {
        return { 0: "纯音乐，请欣赏" }
      } else {
        return this.lyrics
      }
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
  overflow-y: auto;
  scrollbar-width: none;
  padding: 0 24px;
  scroll-behavior: smooth;
}

.lyrics-container > *:first-child {
  margin-top: 110px;
}

.lyrics-container > *:last-child {
  margin-bottom: 110px;
}

.lyrics-container::-webkit-scrollbar {
  display: none;
}

.lyrics-line {
  font-size: 16px;
  color: #c0c0c0;
  margin-bottom: 10px;
  text-align: left;
  white-space: pre-wrap;
}

.lyrics-active {
  font-weight: bold;
  font-size: 20px;
  color: white;
}

.lyrics-wrapper {
  width: 100%;
  display: flex;
  border-radius: 8px;
  margin: 0 0 16px;
  background: #80808040;
  position: relative;
}
</style>