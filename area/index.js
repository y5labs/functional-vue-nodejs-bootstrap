import inject from 'injectinto'

inject('route', { path: '/page1', component: () => import('./page1.vue')})
inject('route', { path: '/page2', component: () => import('./page2.vue')})
inject('route', { path: '/page3', component: () => import('./page3')})

import './store'
