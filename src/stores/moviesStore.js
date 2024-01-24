import { defineStore } from "pinia";
import { ref } from "vue";
import apiServices from '../api/services.js'

export const useMoviesStore = defineStore('movies', () => {
    const loading = ref(false);
    const trending = ref([]);

    const getTrending = async () => {
        loading.value = true;

        try {
            const {data} = await apiServices.getTrending();
            trending.value = data.results;
        
        } catch (error) {
            console.log(error);
        }finally{
            loading.value = false;
        }
    }

    const findByID = async (id) => {
        loading.value = true;

        try {
            const {data} = await apiServices.findByID(id);
            return data
        
        } catch (error) {
            console.log(error);
        }finally{
            loading.value = false;
        }
    }


    return{
        getTrending,
        findByID,
        trending
    }
})