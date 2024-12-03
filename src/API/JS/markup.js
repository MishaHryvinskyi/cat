function createMarkup (data) {
    return data.map(({ url, width, id }) => `
        <li><img src="${url}" alt="${id}" width="${width}"></li>`
    ).join('');
}

export { createMarkup }