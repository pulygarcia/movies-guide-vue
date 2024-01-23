<script setup>
import Header from '@/components/Header.vue';
import apiServices from '../api/services.js'
import { onMounted, ref } from 'vue';

const trending = ref([])

onMounted(async() => {
  try {
    const {data} = await apiServices.getTrending();
    trending.value = data.results;

  } catch (error) {
    console.log(error);
  }
})
</script>

<template>
  <Header />

  <div  class="max-w-screen-xl mx-auto mt-5 flex flex-col md:gap-10 md:flex-row">
    <p 
      v-for="item in trending"
    >
      {{ item.title }}
    </p>
  </div>
</template>