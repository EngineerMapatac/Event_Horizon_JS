# 🌌 Event Horizon JS (@engineermapatac/event-horizon-js)

A lightweight, zero-dependency JavaScript wrapper for the NASA Open APIs. Easily fetch data from the Astronomy Picture of the Day (APOD) and the Mars Curiosity Rover right into your Node.js or frontend projects.

## 📦 Installation

Install the package via npm:

```
npm install @engineermapatac/event-horizon-js
```

---

🚀 Quick Start

---

To use this package, you will need a free API key from api.nasa.gov.

---

1. Fetching the Astronomy Picture of the Day (APOD)

```
const nasa = require('@engineermapatac/event-horizon-js');

const API_KEY = 'DEMO_KEY'; // Replace with your actual NASA API key

async function getTodayInSpace() {
    try {
        // Fetch today's picture
        const data = await nasa.getAPOD(API_KEY);
        console.log(`Title: ${data.title}`);
        console.log(`Image URL: ${data.url}`);
        console.log(`Explanation: ${data.explanation}`);
        
        // You can also fetch a specific date (YYYY-MM-DD)
        const pastData = await nasa.getAPOD(API_KEY, '1995-06-16');
        console.log(`Past Image URL: ${pastData.url}`);
    } catch (error) {
        console.error("Error fetching APOD:", error);
    }
}

getTodayInSpace();

```

---

2. Fetching Mars Rover Photos (Curiosity)

```

const nasa = require('@engineermapatac/event-horizon-js');

const API_KEY = 'DEMO_KEY'; 

async function getMarsPhotos() {
    try {
        // Fetch photos from Martian Sol 1000
        const data = await nasa.getMarsPhotos(API_KEY, 1000);
        
        console.log(`Found ${data.photos.length} photos.`);
        if (data.photos.length > 0) {
            console.log(`First Photo URL: ${data.photos[0].img_src}`);
            console.log(`Camera: ${data.photos[0].camera.full_name}`);
        }
    } catch (error) {
        console.error("Error fetching Mars data:", error);
    }
}

getMarsPhotos();

```

--- 

🛠️ API Reference

getAPOD(apiKey, [date])

apiKey (string): Required. Your NASA API Key.

date (string): Optional. The date of the APOD image to retrieve (format: YYYY-MM-DD). Defaults to today.

Returns: A Promise that resolves to the APOD JSON object.

getMarsPhotos(apiKey, [sol])

apiKey (string): Required. Your NASA API Key.

sol (number): Optional. The Martian rotation or day on which the photos were taken. Defaults to 1000.

Returns: A Promise that resolves to the Mars Photos JSON object containing an array of photos.
---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> **Built with 💙 by EngineerMapatac**
