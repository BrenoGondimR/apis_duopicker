// Get 2 movies


const unirest = require('unirest');

const apiKey = '50c3317b76msh5c895bcef018128p1550cajsn74ea49b58a43'; // Replace with your RapidAPI key
const rapidHost = 'imdb8.p.rapidapi.com'



const getMovieDetails = async (title) => {

    const detailsReq = unirest('GET', 'https://imdb8.p.rapidapi.com/title/get-details');

    detailsReq.query({
        tconst: title
    });

    detailsReq.headers({
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': rapidHost
    });

    detailsReq.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
    });

};


function extractImdbId(url) {
    const matchResult = url.match(/\/title\/(tt\d+)\//);
    return matchResult ? matchResult[1] : null;
}
  
  

// ver quantos 

const getMoviesByGenre = async (movieGenre) => {

    const genreReq = unirest('GET', 'https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre');

    genreReq.query({
        genre: '/chart/popular/genre/adventure'
    });

    genreReq.headers({
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': rapidHost
    });

    genreReq.end(function (res) {
        if (res.error) throw new Error(res.error);

        const titles = res.body

        console.log(titles)
        // Use the map function to extract IMDb IDs and store them in a new array
        const treatedTitles = titles.map(url => extractImdbId(url));
        
        console.log(treatedTitles);


        const genres = ['Action', 'Adventure', 'Drama', 'Fantasy']

        const randomIndex = Math.floor(Math.random() * treatedTitles.length);
        console.log(treatedTitles[randomIndex]);

        getMovieDetails(treatedTitles[randomIndex]);


        
        //console.log(res.body);
        
    });


};

const genres = ['Action', 'Adventure', 'Drama', 'Fantasy']

getMoviesByGenre('Action');