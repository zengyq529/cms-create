<template>
    <span>{{value}}</span>
</template>

<script>
import commonData from "./data";

export default {
    name: "global-type-get",
    props: {
        propValue: {
            type: [String,Number],
            default: ""
        },
        type: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            option: commonData[this.type + "Type"]
        };
    },
    computed: {
        value() {
            let item = this.option.filter(item => item.value == this.propValue);
            return (item && item[0]&&item[0] .label) || "";
        }
    }
};
</script>

<style>
</style>