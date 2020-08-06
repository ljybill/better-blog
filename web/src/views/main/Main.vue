<template>
  <main class="main">
    <router-view></router-view>
    <my-aside/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Aside from '@/components/Aside.vue'

@Component({
  components: {
    MyAside: Aside,
  },
})
export default class Main extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .main {
    display: flex;
  }
</style>
