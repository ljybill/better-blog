<template>
  <div style="width: 800px;">
    <div v-html="renderHtml"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getArticle } from '@/fetch/api'
import marked from 'marked'

@Component
export default class ArticleDetail extends Vue {
  content = ''

  mounted () {
    getArticle(this.$route.params.articleTitle).then(res => {
      this.content = res.data.data
    })
  }

  get renderHtml () {
    return marked(this.content)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
