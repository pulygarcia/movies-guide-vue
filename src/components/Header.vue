<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>

<template>
<nav class="bg-slate-900 md:fixed w-full top-0 z-40">
  <div class="w-11/12 md:flex flex-wrap justify-center md:justify-between md:items-center mx-auto py-6">

  <nav class="flex justify-between items-center">
    <a href="/" class="flex items-center gap-2">
        <img src="/pochoclos.svg" class="w-12 animate-bounce" alt="Pool-e logo" />
        <span class="self-center text-2xl font-bold whitespace-nowrap text-white">Pool-E movies</span>
    </a>

    <button @click="router.push({name: 'favorites'})" type="button" class="lg:hidden p-2 bg-gray-700 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>

    </button>
  </nav>

  <button @click="router.push({name: 'favorites'})" type="button" class="hidden md:flex gap-1 text-white p-2 border border-gray-300 bg-slate-900 rounded hover:scale-110 transition">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4444" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
      Favorites list
  </button>

  <div class="flex md:order-2 mt-5 md:mt-0">
    <div class="relative md:block">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-slate-900" placeholder="Search...">
    </div>
  </div>

  </div>
</nav>
</template>