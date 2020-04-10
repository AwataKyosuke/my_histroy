import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Experience from '@/views/Experience.vue'
import Products from '@/views/Products.vue'
import Articles from '@/views/Articles.vue'
import Article from '@/views/ArticleDetail.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: Article
  },
]
