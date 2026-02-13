const apiKey = 'ICNqRASZWMtwap7Tipdd8D71ByJaBJxMKJXkANyE'; // Replace with your actual NASA API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

async function fetchAPOD() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // 1. Update Title and Date
        document.getElementById('apod-title').innerText = data.title;
        document.getElementById('apod-date').innerText = data.date;
        document.getElementById('apod-explanation').innerText = data.explanation;

        // 2. Handle Image vs Video
        const mediaWrapper = document.getElementById('media-wrapper');
        
        if (data.media_type === 'image') {
            const img = document.createElement('img');
            img.src = data.url;
            img.alt = data.title;
            mediaWrapper.appendChild(img);
        } else if (data.media_type === 'video') {
            const iframe = document.createElement('iframe');
            iframe.src = data.url;
            iframe.width = "100%";
            iframe.height = "400"; // Adjust height as needed
            iframe.frameBorder = "0";
            mediaWrapper.appendChild(iframe);
        }

    } catch (error) {
        console.error("Error fetching APOD data:", error);
        document.getElementById('apod-title').innerText = "Failed to load data. Check console.";
    }
}

// Run the function when the page loads
fetchAPOD();