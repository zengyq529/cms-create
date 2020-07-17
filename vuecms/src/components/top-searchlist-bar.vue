<template>
<div class="operator-bar-wrapper clr">
  <div class="opeat-l">
    <slot name="left" />
  </div>
  <div class="opeat-r">
    <slot name="right" />
  </div>
</div>
</template>

<script>
export default {
  name: 'global-top-search-bar',
  data () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.operator-bar-wrapper {
    margin: 16px 0;
    .opeat-l,
    .opeat-r {
        display: inline-block;
    }

    .opeat-l {
        margin-top: 6px;
    }

    .opeat-l,
    .opeat-r {
        font-size: 0;
    }

    .opeat-r {
        float: right;
    }
}
.clr {
    &:after {
        content: " ";
        clear: both;
        height: 0;
        visibility: hidden;
        display: block;
    }
}
</style>
