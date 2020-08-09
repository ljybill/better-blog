import { RouteConfig } from 'vue-router'
import Main from '@/views/main/Main.vue'
import ArticleList from '@/views/article/ArticleList.vue'
import ArticleDetail from '@/views/article/ArticleDetail.vue'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/',
        name: 'ArticleList',
        component: ArticleList,
      },
      {
        path: '/article/:articleTitle',
        name: 'ArticleDetail',
        component: ArticleDetail,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

export default routes
