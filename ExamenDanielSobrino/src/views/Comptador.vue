<script setup>
import { ref, provide } from 'vue';
import BotoRestar from '@/components/BotoRestar.vue';
import BotoSumar from '@/components/BotoSumar.vue';

const valor = ref(0); 

const incrementar = () => {
  valor.value ++;
};

const decrementar = () => {
  valor.value --;
};

provide('valor', valor);
provide('incrementar', incrementar);
provide('decrementar', decrementar);
</script>

<template>
  <div>
    <h1>Comptador</h1>
    <p>El valor del comptador és: {{ valor }}</p>
    <BotoSumar/>
    <BotoRestar/>
  </div>
</template>
