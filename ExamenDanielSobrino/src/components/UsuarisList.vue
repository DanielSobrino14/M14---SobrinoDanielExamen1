<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  usuaris: Array, 
});
</script>

<template>
  <div>
    <h1>Llistat d'Usuaris</h1>
    <ul>
      <li v-for="usuari in usuaris" :key="usuari.id">
        {{ usuari.name }}
      </li>
    </ul>
  </div>
</template>
