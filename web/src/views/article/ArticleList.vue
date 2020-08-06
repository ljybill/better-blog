<template>
  <div class="list">
    <article class="item" v-for="article in articleList" :key="article.id">
      <div class="item__cover">
        <img src="//cdn.ljybill.com/avatar.png" alt="">
      </div>
      <div class="item__content">
        <p>{{article.title}}</p>
        <p>{{article.summary}}</p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IArticle } from '@/types'

@Component
export default class ArticleList extends Vue {
  articleList: Array<IArticle> = [
    {
      id: 'afdsaiuhfusai',
      title: 'hello world',
      summary: 'xiaomi',
    },
    {
      id: 'afdsai',
      title: 'hello world',
      summary: 'xiaomi',
    },
    {
      id: 'afaiuhfusai',
      title: 'hello world',
      summary: 'xiaomi',
    },
    {
      id: 'afdsausai',
      title: 'hello world',
      summary: 'xiaomi',
    },
    {
      id: 'afdsaiuhai',
      title: 'hello world',
      summary: 'xiaomi',
    },
    {
      id: 'adsaiuhfusai',
      title: 'hello world',
      summary: 'xiaomi',
    },
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .list {
    padding: 0;
    box-sizing: border-box;
    margin: 0 auto;
    width: 800px;
    height: 100%;
    overflow: auto;
  }

  .item {
    border: 1px solid #eee;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    margin: 12px 0;

    &__cover {
      flex: none;
      width: 200px;
      height: 200px;
      margin-right: 24px;

      & > img {
        width: 100%;
        height: 100%;
      }
    }

    &__content {
      flex: 1;
      padding: 24px 0;
    }
  }
</style>
