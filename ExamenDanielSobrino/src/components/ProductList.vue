<script setup>
import { ref } from 'vue';

const productos = ref([
  { id: 1, name: 'Producte A', description: 'Descripció del Producte A' },
  { id: 2, name: 'Producte B', description: 'Descripció del Producte B' },
  { id: 3, name: 'Producte C', description: 'Descripció del Producte C' },
]);
</script>

<template>
  <div>
    <h1>Llistat de Productes</h1>
    <ul>
      <li v-for="product in productos" :key="product.id">
        <RouterLink :to="`/productDetail/${product.id}/${product.name}/${product.description}`">
          {{ product.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
