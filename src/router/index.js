import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/define-forest',
      name: 'defineForest',
      props: true,
      component: () => import('../views/DefineForestView.vue')
    },
    {
      path: '/imprint',
      name: 'imprint',
      props: true,
      component: () => import('../views/ImprintView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const redirect = to.query.redirect;
  if (redirect) {
    next(redirect);
  } else {
    next();
  }
});

export default router
