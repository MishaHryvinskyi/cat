function createMarkupOptions (data) {
    return data.map(({ id, name }) => `
    <option value="${id}">${name}</option>
        `
    ).join('');
}

function createMarkupCard({ url, id, breeds }) {
    return `
    <div class="card">
        <img src="${url}" alt="${id}" width="400" />
        <p class="description">${breeds[0].description}</p>
    </div>`
}

function onError() {
    const messege = `<p class="error">Oops! Something went wrong! Try reloading the page!</p>`
    return containerEl.insertAdjacentHTML('beforeend', messege)
}

export { createMarkupOptions, createMarkupCard, onError }