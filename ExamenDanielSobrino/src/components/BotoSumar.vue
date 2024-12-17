<script setup>
import { inject } from 'vue';

const incrementar = inject('incrementar');
</script>

<template>
  <button @click="incrementar">+1</button>
</template>
