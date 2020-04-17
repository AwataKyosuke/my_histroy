import Home from '@/views/Home.vue'
import Article from '@/views/ArticleDetail.vue'
import NewArticle from '@/views/NewArticle.vue'
import NotFound from '@/views/NotFound.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'ホーム' }
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: Article,
    meta: { title: '備忘録' }
  },
  {
    path: '/articles/new',
    name: 'NewArticle',
    component: NewArticle,
    meta: { title: '新規投稿' }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    mata: { title: '404' }
  }
]
