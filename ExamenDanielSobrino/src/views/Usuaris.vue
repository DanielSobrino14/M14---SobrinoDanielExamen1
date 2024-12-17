<script setup>
import { ref, computed, watch } from 'vue';
import UsuarisList from '@/components/UsuarisList.vue';

const usuaris = ref([
  { id: 1, name: 'Francesc' },
  { id: 2, name: 'Marta' },
  { id: 3, name: 'Pere' },
]);

const cercaNom = ref('');

const contactesFiltrats = computed(() =>
  usuaris.value.filter((usuari) =>
    usuari.name.toLowerCase().includes(cercaNom.value.toLowerCase())
  )
);

</script>

<template>
  <div class="app-container">
    <input v-model="cercaNom" placeholder="Filtra usuaris" class="search-input"/>
    <UsuarisList :usuaris="contactesFiltrats" />
  </div>
</template>

<style scoped>
.app-container {
    float: left;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.search-input {
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  font-size: 16px;
}

</style>
