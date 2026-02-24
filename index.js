// index.js

/**
 * Fetches the Astronomy Picture of the Day.
 * @param {string} apiKey - Your NASA API Key.
 * @param {string} [date=''] - Optional date in YYYY-MM-DD format.
 * @returns {Promise<Object>} JSON response from NASA API.
 */
async function getAPOD(apiKey, date = '') {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    if (date) {
        url += `&date=${date}`;
    }
    
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch APOD data');
    return await response.json();
}

/**
 * Fetches Mars photos from the Curiosity rover.
 * @param {string} apiKey - Your NASA API Key.
 * @param {number} [sol=1000] - Martian sol (day).
 * @returns {Promise<Object>} JSON response from NASA API.
 */
async function getMarsPhotos(apiKey, sol = 1000) {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=1&api_key=${apiKey}`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch Mars data');
    return await response.json();
}

// Export the functions so other developers can use them
module.exports = {
    getAPOD,
    getMarsPhotos
};