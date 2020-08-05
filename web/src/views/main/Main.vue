<template>
  <div class="center">
    <span>施工中...</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Main extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .center {
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>
