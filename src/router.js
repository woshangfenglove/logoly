import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'maplehub',
      component: () => import(/* webpackChunkName: "maplehub" */ './generator/Maplehub.vue'),
      meta: {
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'Maplehub Generator',
              page: route.path,
            }
          },
        },
      },
    },
    {
      path: '/vertical-ph',
      name: 'vertical-maplehub',
      component: () =>
        import(/* webpackChunkName: "vertical-maplehub" */ './generator/VerticalMapleHub.vue'),
      meta: {
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'VerticalMapleHub Generator',
              page: route.path,
            }
          },
        },
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'About',
              page: route.path,
            }
          },
        },
      },
    },
  ],
})
