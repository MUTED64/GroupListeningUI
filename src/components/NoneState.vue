<template>
    <div>
        {{ `😢 ${text}` }}
    </div>
</template>

<script>
export default {
    name: "NoneState",
    props: {
        text: {
            type: String,
            default: "暂无数据"
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {}
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    color: #ccc;
    width: 100%;
    height: 128px;
    background: #80808040;
    border-radius: 8px;
}
</style>