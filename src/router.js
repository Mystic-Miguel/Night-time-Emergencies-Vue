import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import ContactUs from './views/contact-us'
import Home from './views/home'
import Gallery from './views/gallery'
import Services from './views/services'
import AboutUs from './views/about-us'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Contact-Us',
      path: '/contact-us',
      component: ContactUs,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Gallery',
      path: '/gallery',
      component: Gallery,
    },
    {
      name: 'Services',
      path: '/services',
      component: Services,
    },
    {
      name: 'About-Us',
      path: '/about-us',
      component: AboutUs,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
