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
        class="flex-shrink-0 flex flex-col rounded-md cursor-pointer relative animate-fade-up"
        @click="router.push({name: 'movie-data', params: {id: item.id}})"
    >
        <div class="overflow-hidden">
            <img :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`" alt="poster" class="w-56 md:w-full object-cover rounded-md md:hover:scale-110 transition">
        </div>
        <p class="text-white text-center text-sm font-semibold mt-2">{{ item.title }}</p>
        <div class="bg-blue-700 p-1 px-4 justify-center rounded-md text-white text-center text-sm font-bold absolute bottom-10 right-4 flex items-center gap-1">
            <span class="">{{ Math.floor(item.vote_average) }}</span>
            <img src="/star.svg" alt="star">
        </div>

    </article>
</template>