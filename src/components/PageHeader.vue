<template>
    <header>
        <mu-icon left color="white" value="library_music" :size="isMobile ? 32 : 48"></mu-icon>
        <h1 class="ellipsis" @click="$emit('openHouse')">{{ title }}</h1>
        <div class="right">
            <mu-button fab :small="isMobile" color="primary" class="button-wrapper" @click="$emit('showHelp')">
                <mu-icon value="help_outline" color="white" :size="isMobile ? 32 : 48"></mu-icon>
            </mu-button>
            <mu-button fab :small="isMobile" color="primary" class="button-wrapper" @click="$emit('showAbout')">
                <mu-icon value="info_outline" color="white" :size="isMobile ? 32 : 48"></mu-icon>
            </mu-button>
        </div>
    </header>
</template>

<script>
export default {
    name: "PageHeader",
    data() {
        return {
            isMobile: false
        }
    },
    mounted() {
        this.isMobile = document.body.clientWidth < 768;
        window.addEventListener('resize', () => {
            this.isMobile = document.body.clientWidth < 768;
        })
    },
    props: {
        title: {
            type: String,
            default: "一起听歌吧"
        }
    },
}
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 0 192px;
    padding: 32px 32px;
    width: 100%;
    max-width: 1536px;
    flex-wrap: nowrap;
    z-index: 5;
}

h1 {
    color: white;
    font-size: 42px;
    margin: 0;
    padding: 0;
    flex: 1 1 auto;
    font-weight: bold;
    line-height: 64px;
}

@media screen and (max-width: 768px) {
    h1 {
        font-size: 28px;
        line-height: 40px;
    }

    header {
        margin: 0;
        padding: 16px 32px;
        box-shadow: 0 0 8px #00000080;
    }
    
    .mu-fab-button.mu-button-small {
        width: 32px;
        height: 32px;
    }
}

.right {
    display: flex;
    align-items: center;
    gap: 4px;
}
</style>