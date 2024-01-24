import api from '../lib/axios';

export default {
    getTrending(){
        return api.get('/trending/all/day?api_key=21fa1f67a92883c0b826f4e6d6e925c5')
    },
    getTopRated(){
        return api.get('/movie/top_rated?api_key=21fa1f67a92883c0b826f4e6d6e925c5')
    },
    findByID(id){
        return api.get(`/movie/${id}?api_key=21fa1f67a92883c0b826f4e6d6e925c5`)
    }
}