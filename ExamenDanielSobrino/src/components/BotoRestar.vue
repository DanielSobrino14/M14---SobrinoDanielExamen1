<script setup>
import { inject } from 'vue';

const decrementar = inject('decrementar');
</script>

<template>
  <button @click="decrementar">-1</button>
</template>
