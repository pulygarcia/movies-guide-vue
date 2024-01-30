<script setup>
    defineProps({
        title:{
            type: String
        }
    })
</script>

<template>
    <div class="py-10">
        <h2 class="text-white font-bold text-3xl">{{ title }}</h2>
        <span class="h-[1px] w-full bg-red-500 block mt-2"></span>
    </div>
</template>