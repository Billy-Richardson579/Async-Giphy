require('dotenv').config();

const apiKey = process.env.API_KEY;

// Print out value of API key stored in .env file
console.log(apiKey)
async function getImage(query){
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en`

const response = await fetch(endpoint)
const data = await response.json();
console.log(data)
return data
} 
