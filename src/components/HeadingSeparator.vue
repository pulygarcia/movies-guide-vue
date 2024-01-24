<script setup>
    defineProps({
        title:{
            type: String
        }
    })
</script>

<template>
    <div class="flex items-center gap-2 py-10">
        <h2 class="text-white font-bold text-4xl">{{ title }}</h2>
        <span class="h-[2px] w-full bg-red-500"></span>
    </div>
</template>