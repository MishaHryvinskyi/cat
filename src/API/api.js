import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_jNH6TAh1NHqZ9LjNhZEHnENv6IiStFxbk58pmddnKGMcEN8Vky7nvx7eZrFcBW5Q";

const URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY = 'live_jNH6TAh1NHqZ9LjNhZEHnENv6IiStFxbk58pmddnKGMcEN8Vky7nvx7eZrFcBW5Q';
const URL_IMG = 'https://api.thecatapi.com/v1/images/search';

async function fetchBreeds () {
    const response = await axios.get(URL);
    return response.data;
}

async function fetchCatByBreed(breedId) {
    const response = await axios.get(`${URL_IMG}?breed_ids=${breedId}`);
    return response.data;
}

export { fetchBreeds, fetchCatByBreed };