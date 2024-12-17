import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/Products.vue'),
    },
    {
      path: '/productDetail/:id/:name/:description',
      name: 'productDetail',
      component: () => import('@/views/ProductsDetails.vue'),
    },
  ],
})

export default router
