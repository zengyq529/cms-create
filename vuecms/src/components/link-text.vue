<template>
    <el-link :href="propValue" target="_blank" type="primary">{{propValue}}</el-link>
</template>

<script>
export default {
    name: "global-link",
    props: {
        propValue: {
            type: String,
            default: ""
        }
    },
};
</script>

<style>
</style>