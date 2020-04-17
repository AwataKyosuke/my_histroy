import Home from '@/views/Home.vue'
import Article from '@/views/ArticleDetail.vue'
import NewArticle from '@/views/NewArticle.vue'
import NotFound from '@/views/NotFound.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: Article,
  },
  {
    path: '/articles/new',
    name: 'NewArticle',
    component: NewArticle,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }
]
