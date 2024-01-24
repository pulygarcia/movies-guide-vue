import { defineStore } from "pinia";
import { ref } from "vue";
import apiServices from '../api/services.js'

export const useMoviesStore = defineStore('movies', () => {
    const loading = ref(false);
    const trending = ref([]);
    const topRated = ref([]);
    const favorites = ref([]);
    const successMessage = ref('');

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

    const getTopRated = async () => {
        loading.value = true;

        try {
            const {data} = await apiServices.getTopRated();
            topRated.value = data.results;
        
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

    const addToFavorites = async (movieID) => {
        try {
            const {data} = await apiServices.findByID(parseInt(movieID));
            favorites.value.push(data);

            successMessage.value = 'Added to favorites';

            setTimeout(() => {
                successMessage.value = '';
            }, 3000);

        } catch (error) {
            console.log(error);
        }
    }


    return{
        getTrending,
        getTopRated,
        addToFavorites,
        findByID,
        trending,
        favorites,
        topRated,
        loading,
        successMessage
    }
})