<script setup>
    
</script>

<template>
<nav class="bg-slate-900 md:fixed w-full top-0 z-40">
  <div class="w-11/12 md:max-w-screen-xl md:flex flex-wrap justify-center md:justify-between mx-auto py-6">

  <a href="/" class="flex items-center gap-2">
      <img src="/pochoclos.svg" class="w-12 animate-bounce" alt="Pool-e logo" />
      <span class="self-center text-2xl font-bold whitespace-nowrap text-white">Pool-E movies</span>
  </a>

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