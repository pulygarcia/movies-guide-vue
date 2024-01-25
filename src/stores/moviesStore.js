import { defineStore } from "pinia";
import { ref, onMounted, watch } from "vue";
import apiServices from '../api/services.js'

export const useMoviesStore = defineStore('movies', () => {
    const loading = ref(false);
    const trending = ref([]);
    const topRated = ref([]);
    const successMessage = ref('');
    const favorites = ref([]);

    onMounted(() => {
        if(JSON.parse(localStorage.getItem('favorites'))){
            favorites.value = JSON.parse(localStorage.getItem('favorites'));
        }else{
            favorites.value = [];
        }
    })

    watch(favorites, () => {
        sincronizarStorage();
    },{
        deep: true
    })

    function sincronizarStorage(){
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }

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

            if(favorites.value.some(favorite => favorite.id === parseInt(movieID))){
                alert('The movie is already in favorites list')
                return;
            }
            
            const newFavorites = [...favorites.value];
            newFavorites.push(data);

            favorites.value = newFavorites;

            successMessage.value = 'Added to favorites';

            let favoritesString = JSON.stringify(newFavorites);

            localStorage.setItem('favorites', favoritesString);

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