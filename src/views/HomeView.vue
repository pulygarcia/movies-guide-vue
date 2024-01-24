<script setup>
import Header from '@/components/Header.vue';
import { onMounted } from 'vue';
import {useMoviesStore} from '../stores/moviesStore'
import MovieCard from '../components/MovieCard.vue'

const moviesStore = useMoviesStore();

onMounted(() => {
  moviesStore.getTrending();
})
</script>

<template>
  <section class="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
    <Header />
    <div  class="w-11/12 md:max-w-screen-xl mx-auto pt-10 md:pt-32">
      <div class="flex items-center gap-2">
        <h2 class="text-white font-bold text-4xl">Trending</h2>
        <span class="h-[2px] w-full bg-red-500"></span>
      </div>
      <section class="flex overflow-x-scroll snap-x-mandatory whitespace-nowrap gap-4 md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-6 py-10 md:overflow-hidden">
        <MovieCard
          v-for="item in moviesStore.trending"
          :item="item"
          :key="item.id"
        />
      </section>
    
    </div>
  </section>
</template>