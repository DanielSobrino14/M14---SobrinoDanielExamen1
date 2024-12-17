<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const producto = computed(() => ({
  id: route.params.id,
  name: route.params.name,
  description: route.params.description,
}));
</script>

<template>
  <div>
    <p>ID: {{ producto.id }}</p>
    <h3>Nombre: {{ producto.name }}</h3>
    <p>Descripción: {{ producto.description }}</p>
  </div>
</template>
