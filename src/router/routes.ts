import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Experience from '@/views/Experience.vue'
import Products from '@/views/Products.vue'
import Articles from '@/views/Articles.vue'
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
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: '自己紹介' }
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
    meta: { title: '業務経歴' }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: { title: '成果物' }
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
    meta: { title: '備忘録' }
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
