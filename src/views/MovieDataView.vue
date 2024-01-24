<script setup>
  import Header from '@/components/Header.vue';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import {useMoviesStore} from '../stores/moviesStore'

  const route = useRoute();
  const id = route.params.id;
  const moviesStore = useMoviesStore();
  const movie = ref({})

  onMounted(async () => {
    const data = await moviesStore.findByID(id);

    movie.value = data;
  })

</script>

<template>
  <Header />
  <div class="h-screen w-full flex flex-col justify-center"
    :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://image.tmdb.org/t/p/original/${movie.poster_path}`, backgroundPosition: 'center'}"
  >
    <div class="w-11/12 md:max-w-screen-xl mx-auto flex flex-row gap-2 md:gap-8">
      <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="poster" class="w-52 md:w-80 rounded-2xl">
      <div class="flex flex-col gap-2 md:gap-6">
        <h2 class="text-white font-bold text-xl md:text-6xl">{{ movie.title }}</h2>

        <div class="flex items-center gap-2">
          <span v-for="genre in movie.genres" class="bg-slate-900 py-1 px-2 text-white rounded">{{ genre.name }}</span>
        </div>

        <span class="w-28 text-center rounded px-2 py-1 bg-blue-600 text-white font-bold">{{ movie.release_date }}</span>

            <div class="flex gap-1">
              <img v-if="typeof movie.vote_average === 'number'" v-for="n in Math.floor(movie.vote_average)" src="/star.svg" alt="star" class="w-3 h-3 md:w-6 md:h-6">
            </div>
          
        <p class="text-gray-300">{{ Math.floor(movie.runtime / 60) }} hr {{ movie.runtime % 60 }} min.</p>

        <p class="text-gray-300">{{ movie.overview }}</p>

        <h3 class="text-white font-bold text-xl flex items-center gap-2">
          Production
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>

          </span>
        </h3>
        <div class="flex items-center gap-6">
          <p v-for="company in movie.production_companies" class="text-gray-300">{{ company.name }}</p>
        </div>

        <div class="flex items-center gap-4">
          <button type="button" class="text-white p-2 bg-red-500 hover:scale-110 transition rounded-md w-36 flex items-center gap-2 justify-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </span>
            Favorite
          </button>

          <a :href="movie.homepage">
            <button type="button" class="text-white p-2 bg-slate-900 hover:scale-110 transition rounded-md w-36 flex items-center gap-2 justify-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              </span>
              Website
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>