<template>
  <div id="app">
    <my-header></my-header>
    <router-view class="view"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyHeader from '@/components/Header.vue'

@Component({
  components: {
    MyHeader,
  },
})
export default class App extends Vue {
}
</script>

<style lang="less" scoped>
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .view {
    flex: 1;
  }
</style>
