import axios from "axios";

const URL = 'https://api.thecatapi.com/v1/images/search?limit=5';
const API_KEY = 'live_jNH6TAh1NHqZ9LjNhZEHnENv6IiStFxbk58pmddnKGMcEN8Vky7nvx7eZrFcBW5Q';

async function getCats () {
    const response = await axios.get(`${URL}&api_key=${API_KEY}`);
    return response.data;
}

export { getCats };