import { createRouter, createWebHistory } from 'vue-router';

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
    {
      path: '/comptador',
      name: 'comptador',
      component: () => import('@/views/Comptador.vue'),
    },
    {
      path: '/usuaris',
      name: 'Usuaris',
      component: () => import('@/views/Usuaris.vue'),
    },
  ],
});

export default router;
