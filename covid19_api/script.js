const endpoint = 'https://covid19.mathdro.id/api';

fetch(endpoint)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => $('.main').append(`<pre>${error}</pre>`));
