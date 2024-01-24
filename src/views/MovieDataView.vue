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
  
  <div>
    <p class="text-white">{{ movie.title }}</p>
  </div>
</template>