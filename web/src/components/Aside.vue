<template>
  <aside>
    施工中...
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Aside extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  aside {
    position: sticky;
    top: 124px;
    margin: 24px 24px 0 0;
    border: 1px solid #000;
    width: 300px;
    height: 300px;
  }
</style>
