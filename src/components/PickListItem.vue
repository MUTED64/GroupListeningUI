<template>
    <div>
        <div class="pick-list-item">
            <div class="pick-list-item-index">{{ index + 1 }}</div>
            <div class="pick-list-item-info">
                <div class="pick-list-item-primary">
                    <div class="pick-list-item-name ellipsis">{{ item.name }}</div>
                    <div class="pick-list-item-artists ellipsis">{{ item.artist }}</div>
                </div>
                <div class="pick-list-item-detail">
                    <div class="pick-list-item-album ellipsis">{{ item.album.name }}</div>
                    <div class="pick-list-item-picker ellipsis">by {{ nickName }}</div>
                </div>
            </div>
            <div class="pick-list-item-upvote">
                <mu-button fab small color="primary" class="button-wrapper" @click="upvote">
                    <mu-icon value="arrow_circle_up" color="white" size="28"></mu-icon>
                </mu-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PickListItem",
    props: {
        item: {
            type: Object,
            default: () => {
                return {
                    id: 0,
                    name: "未知歌曲",
                    artist: "佚名",
                    album: { name: "专辑名" },
                    nickName: "",
                }
            }
        },
        index: {
            type: Number,
            default: 0
        },
    },
    computed: {
        nickName() { 
            if (this.item.nickName.indexOf("(")){
                return this.item.nickName.split("(")[0]
            } else {
                return this.item.nickName
            }
        }
    },
    methods:{
        upvote(){
            this.$emit("upvote", this.item.id, this.item.name)
        }
    }
}
</script>

<style scoped>
.pick-list-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 12px 8px 20px;
    justify-content: space-between;
    background: #80808040;
    border-radius: 8px;
}

.pick-list-item-info {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    margin: 0;
    min-width: 0;
}

.pick-list-item-upvote .button-wrapper {
    box-shadow: none;
}

.pick-list-item-name {
    font-weight: bold;
    flex: 1;
}

.pick-list-item-name, .pick-list-item-artists {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
}

.pick-list-item-artists{
    max-width: 45%;
}

.pick-list-item-album {
    font-size: 16px;
    color: #cfcfcf;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.pick-list-item-index {
    font-size: 18px;
    font-weight: bold;
}

.pick-list-item-primary, .pick-list-item-detail {
    display: flex;
    gap: 16px;
}

.pick-list-item-picker{
    max-width: 45%;
    font-size: 16px;
    color: #cfcfcf;
    flex: 0 0 auto;
}

.mu-fab-button.mu-button-small{
    width: 28px;
    height: 28px;
}
</style>