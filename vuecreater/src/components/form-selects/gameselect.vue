<template>
  <el-select
    v-model="modelvalue"
    placeholder="游戏选择"
    :multiple="multiple"
    @change="gameChange"
    @visible-change="getGame"
    filterable
    clearable
  >
    <el-option label="所有" value="all"></el-option>
    <el-option
      v-for="(item,index) in option"
      :key="index"
      :label="item.gameName"
      :value="item.gameId"
    ></el-option>
  </el-select>
</template>

<script>
import ajax from "@/common/ajax";
export default {
  name: "global-game-select",
  props: {
    propValue: {
      type: Array,
      default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },

  model: {
    prop: "propValue",
    event: "change"
  },
  watch: {
    propValue(newval) {
      this.modelvalue = newval;
    }
  },
  data() {
    return {
      option: [],
      modelvalue: []
    };
  },
  methods: {
    async getGame() {
      if (this.option.length) {
        return;
      }
      const { result } = await ajax.get(
        "/xiaoyue-operation/manager/getUserGameList?game_id=&platform_type=new"
      );
      this.option = result;
    },
    gameChange(value) {
      this.$emit("change", value);
    }
  }
};
</script>

<style>
</style>