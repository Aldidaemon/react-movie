const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '2727f82c4fbebd6b98a561d4fb8a51a9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;