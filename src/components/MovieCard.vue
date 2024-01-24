<script setup>
    import {useRouter} from 'vue-router';

    const router = useRouter();

    defineProps({
        item:{
            type: Object
        }
    })
</script>

<template>
  <article
        class="flex-shrink-0 flex flex-col items-center rounded-md hover:scale-110 transition cursor-pointer"
        @click="router.push({name: 'movie-data', params: {id: item.id}})"
    >
        <img :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`" alt="poster" class="w-56 md:w-full object-cover rounded-md">
        <div class="flex items-center gap-2">
          <p class="text-white text-center text-sm font-semibold mt-2">{{ item.title }}</p>
        </div>
    </article>
</template>