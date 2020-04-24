import Home from '@/views/Home.vue'
import Article from '@/views/ArticleDetail.vue'
import NewArticle from '@/views/NewArticle.vue'
import NotFound from '@/views/NotFound.vue'
import EditArticle from '@/views/EditArticle.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'トップ', description: 'トップページ。メモのようなブログのようなよくわからないWebサイト。' },
  },
  {
    path: '/article/new',
    name: 'NewArticle',
    component: NewArticle,
    meta: { title: '新規投稿', description: '新規投稿ページ' },
  },
  {
    path: '/article/:id/edit',
    name: 'EditArticle',
    component: EditArticle,
    meta: { title: '編集', description: '編集ページ' },
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article,
    meta: { title: '記事詳細', description: '記事詳細ページ' },
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '404', description: 'ページが見つかりませんでした。' },
  }
]
