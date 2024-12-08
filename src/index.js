import { fetchBreeds, fetchCatByBreed } from "./API/api";
import { createMarkupOptions, createMarkupCard, onError } from "./API/JS/markup";

const selectEl = document.querySelector('.breed-select');
const containerEl = document.querySelector('.cat-info');

selectEl.addEventListener('change', onOptClick);

function onOptClick(e) {
    const idCat = e.target.value;
    fetchCatByBreed(idCat)
    .then(data => {
        console.log(data[0])
        containerEl.innerHTML = createMarkupCard(data[0])
    }
    ).catch(onError)
}

fetchBreeds()
.then(data => {
    const markup = createMarkupOptions(data);
    selectEl.insertAdjacentHTML('beforeend', markup);
    console.log(data)
})
.catch(e => console.log(e));
