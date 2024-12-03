import { getCats } from "./API/api";
import { createMarkup } from "./API/JS/markup";

const list = document.querySelector('.js-list');

getCats()
.then(data => {
    const markup = createMarkup(data);
    list.insertAdjacentHTML('beforeend', markup);
})
.catch(e => console.log(e));
