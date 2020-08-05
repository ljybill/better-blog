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
    height: @headerHeight;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;

    &__desc {
      line-height: @headerHeight;
    }
  }
</style>
