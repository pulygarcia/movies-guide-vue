<script setup>
import Header from '@/components/Header.vue';
import HeadingSeparator from '@/components/HeadingSeparator.vue';
import MovieCard from '@/components/MovieCard.vue';
import { useMoviesStore } from '../stores/moviesStore'
import Spinner from '@/components/Spinner.vue';
import Footer from '@/components/Footer.vue';

const moviesStore = useMoviesStore();
</script>

<template>
  <section 
    class="bg-gradient-to-r from-gray-800 via-gray-900 to-black"
    :class="moviesStore.favorites.length ? 'h-screen md:h-auto' : 'h-screen'"
  >
    <Header />

    <Spinner v-if="moviesStore.loading"/>

    <div v-else class="w-11/12 mx-auto pb-10 md:py-32">
      <HeadingSeparator title="Favorites"/>

      <section v-if="moviesStore.favorites.length" class="flex overflow-x-scroll snap-x-mandatory whitespace-nowrap gap-4 md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-6 md:overflow-hidden">
        <MovieCard 
          v-for="item in moviesStore.favorites"
          :key="item.id"
          :item="item"
        />
      </section>

      <!-- EMPTY -->
      <div v-else class="flex flex-col items-center justify-center gap-4">
        <img src="/box.svg" alt="empty box" class="w-36 h-36">
        <p class="text-white text-center text-lg">Don't have favorites yet</p>
        <a href="/" class="text-yellow-500 underline">Start adding</a>
      </div>
    </div>

    <Footer />
  </section>
</template>