<script setup>
import Header from '@/components/Header.vue';
import Spinner from '@/components/Spinner.vue';
import { onMounted, ref } from 'vue';
import {useMoviesStore} from '../stores/moviesStore'
import MovieCard from '../components/MovieCard.vue'
import HeadingSeparator from '@/components/HeadingSeparator.vue';

const moviesStore = useMoviesStore();
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  
  try {
    await Promise.all([
      moviesStore.getTrending(),
      moviesStore.getTopRated()
    ]);
  } catch (error) {
    console.error('Error al cargar datos:', error);
  }finally{
    setTimeout(() => {
      loading.value = false
    }, 1000);
  }
});
</script>

<template>
  <section class="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
    <Header />

    <Spinner v-if="loading"/>

    <div v-else class="w-11/12 mx-auto pb-10 md:py-32">
      
      <HeadingSeparator title="Trending"/>

      <section class="flex overflow-x-scroll snap-x-mandatory whitespace-nowrap gap-4 md:grid md:grid-cols-4 lg:grid-cols-6 md:gap-6 md:overflow-hidden">
        <MovieCard
          v-for="item in moviesStore.trending"
          :item="item"
          :key="item.id"
        />
      </section>

      <HeadingSeparator title="Top rated"/>

      <section class="flex overflow-x-scroll snap-x-mandatory whitespace-nowrap gap-4 md:grid md:grid-cols-4 lg:grid-cols-6 md:gap-6 md:overflow-hidden">
        <MovieCard
          v-for="item in moviesStore.topRated"
          :item="item"
          :key="item.id"
        />
      </section>
    </div>
  </section>
</template>