const apiKey = 'ICNqRASZWMtwap7Tipdd8D71ByJaBJxMKJXkANyE'; 

// 1. Fetch APOD (Now accepts an optional date parameter)
async function fetchAPOD(date = '') {
    const title = document.getElementById('apod-title');
    const explanation = document.getElementById('apod-explanation');
    const mediaWrapper = document.getElementById('media-wrapper');
    const dateDisplay = document.getElementById('apod-date');

    // Show loading state
    title.innerText = "Loading...";
    mediaWrapper.innerHTML = '';
    explanation.innerText = '';

    // Build URL: If date is provided, add &date=YYYY-MM-DD
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    if (date) {
        url += `&date=${date}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Check for error (e.g., future date)
        if (data.code === 400) {
            title.innerText = "Error: " + data.msg;
            return;
        }

        title.innerText = data.title;
        dateDisplay.innerText = data.date;
        explanation.innerText = data.explanation;

        if (data.media_type === 'image') {
            const img = document.createElement('img');
            img.src = data.url;
            img.alt = data.title;
            mediaWrapper.appendChild(img);
        } else if (data.media_type === 'video') {
            const iframe = document.createElement('iframe');
            iframe.src = data.url;
            iframe.width = "100%";
            iframe.height = "400";
            iframe.frameBorder = "0";
            mediaWrapper.appendChild(iframe);
        }
    } catch (error) {
        console.log(error);
        title.innerText = "Failed to load data.";
    }
}

// 2. Button Click Handler
function fetchAPODByDate() {
    const dateInput = document.getElementById('date-picker').value;
    if (dateInput) {
        fetchAPOD(dateInput);
    } else {
        alert("Please select a date first!");
    }
}

// 3. Setup Date Picker Max Date (Prevent future dates)
const today = new Date().toISOString().split('T')[0];
document.getElementById('date-picker').max = today;

// 4. Fetch Mars Photos (Unchanged)
async function fetchMarsPhotos() {
    const gallery = document.getElementById('mars-gallery');
    if (gallery.innerHTML.trim() !== "") return; 

    gallery.innerHTML = '<p>Loading Mars data...</p>';
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const photos = data.photos.slice(0, 12); 

        gallery.innerHTML = ''; 

        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.img_src;
            img.alt = `Mars Photo ID: ${photo.id}`;
            img.title = photo.camera.full_name; 
            gallery.appendChild(img);
        });
    } catch (error) {
        gallery.innerHTML = '<p>Error loading Mars photos.</p>';
    }
}

// 5. Toggle Sections (Unchanged)
function showSection(sectionId) {
    document.getElementById('apod-section').style.display = 'none';
    document.getElementById('mars-section').style.display = 'none';

    if (sectionId === 'apod') {
        document.getElementById('apod-section').style.display = 'block';
    } else {
        document.getElementById('mars-section').style.display = 'block';
        fetchMarsPhotos(); 
    }
}

// 6. Random Date Generator
function fetchRandomAPOD() {
    // NASA APOD started on June 16, 1995
    const startDate = new Date('1995-06-16').getTime();
    const today = new Date().getTime();

    // Generate a random time between start and today
    const randomTime = startDate + Math.random() * (today - startDate);
    
    // Convert timestamp back to YYYY-MM-DD format
    const randomDate = new Date(randomTime);
    const dateString = randomDate.toISOString().split('T')[0];

    // Update the date picker input so the user sees which date was picked
    document.getElementById('date-picker').value = dateString;

    // Fetch the data
    fetchAPOD(dateString);
}
// Initial Load (Loads today's picture)
fetchAPOD();