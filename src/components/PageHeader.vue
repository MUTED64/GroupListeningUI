<template>
    <header>
        <mu-icon left color="white" value="library_music" :size="isMobile ? 24 : 48"></mu-icon>
        <h1>{{ title }}</h1>
        <mu-icon left color="white" value="info_outline" :size="isMobile ? 24 : 48"></mu-icon>
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
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 32px 192px;
    padding: 0 32px;
    width: 100%;
    max-width: 1536px;
    flex-wrap: nowrap;
}

h1 {
    color: white;
    font-size: 42px;
    margin: 0;
    padding: 0;
    flex: 1 1 auto;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

@media screen and (max-width: 768px) {
    h1 {
        font-size: 24px;
    }
}
</style>