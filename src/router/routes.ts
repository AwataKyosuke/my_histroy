import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Experience from '@/views/Experience'
import Career from '@/views/Career'
import Column from '@/views/Column'

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
    path: '/career',
    name: 'Career',
    component: Career
  },
  {
    path: '/column',
    name: 'Column',
    component: Column
  }
]
