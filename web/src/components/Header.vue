<template>
  <header class="header">
    <div class="logo"><img width="200" height="100" src="../assets/logo.svg" alt=""></div>
    <div class="header__desc"><span>成为更好的自己</span></div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @headerHeight: 100px;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    height: @headerHeight;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 4px 1px rgba(0, 0, 0, .3);

    &__desc {
      line-height: @headerHeight;
    }
  }
</style>
