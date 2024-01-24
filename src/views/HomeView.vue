<script setup>
import Header from '@/components/Header.vue';
import { onMounted } from 'vue';
import {useMoviesStore} from '../stores/moviesStore'
import MovieCard from '../components/MovieCard.vue'
import HeadingSeparator from '@/components/HeadingSeparator.vue';

const moviesStore = useMoviesStore();

onMounted(() => {
  moviesStore.getTrending();
  moviesStore.getTopRated();
})
</script>

<template>
  <section class="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
    <Header />

    <div class="w-11/12 md:max-w-screen-xl mx-auto pb-10 md:py-32">
      
      <HeadingSeparator title="Trending"/>

      <section class="flex overflow-x-scroll snap-x-mandatory whitespace-nowrap gap-4 md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-6 md:overflow-hidden">
        <MovieCard
          v-for="item in moviesStore.trending"
          :item="item"
          :key="item.id"
        />
      </section>

      <HeadingSeparator title="Top rated"/>

      <section class="flex overflow-x-scroll snap-x-mandatory whitespace-nowrap gap-4 md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-6 md:overflow-hidden">
        <MovieCard
          v-for="item in moviesStore.topRated"
          :item="item"
          :key="item.id"
        />
      </section>
    </div>
  </section>
</template>