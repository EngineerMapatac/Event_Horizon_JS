# 🌌 Cosmos Dashboard

**Cosmos Dashboard** is a responsive web application that visualizes real-time data from the NASA Open APIs. It serves as an interactive window into space, featuring a daily astronomy picture, a time-traveling archive, and a gallery of images directly from the surface of Mars.

[**🔴 LIVE DEMO**](https://Event_Horizon_JS.github.io/Event_Horizon_JS/)
*(Replace "YOUR_USERNAME" with your actual GitHub username)*

---

## 🚀 Key Features

### 1. Astronomy Picture of the Day (APOD)
* **Daily Feed:** Automatically fetches and displays NASA's featured image or video of the day.
* **Time Travel:** Includes a **Date Picker** allowing users to view space history from any specific date since 1995.
* **Surprise Me 🎲:** A randomizer algorithm that retrieves a random image from the archives for serendipitous discovery.
* **Media Support:** Intelligently handles both static images and video content (YouTube/Vimeo embeds).

### 2. Mars Rover Gallery
* **Curiosity Rover Data:** Fetches real images captured by the Curiosity rover on Mars.
* **Grid Layout:** Displays photos in a responsive, interactive grid.
* **Metadata:** Hovering over images reveals specific camera details (e.g., Front Hazard Avoidance Camera).

### 3. User Interface
* **Glassmorphism Design:** A modern, semi-transparent UI that mimics the look of a futuristic dashboard.
* **Responsive:** Fully optimized for desktop, tablets, and mobile devices.
* **Interactive:** Hover effects, glow animations, and smooth transitions between sections.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Flexbox & Grid), JavaScript (ES6+)
* **API:** [NASA Open APIs](https://api.nasa.gov/) (APOD & Mars Rover Photos)
* **Hosting:** GitHub Pages
* **Tools:** VS Code, Git

---

## 📸 Screenshots

| Desktop View | Mobile View |
|:---:|:---:|
| ![Desktop Screenshot](https://via.placeholder.com/400x200?text=App+Screenshot) | ![Mobile Screenshot](https://via.placeholder.com/200x350?text=Mobile+View) |

*(Note: Once you take screenshots of your app, replace the links above with your actual image paths!)*

---

## 💻 How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/cosmos-dashboard.git](https://github.com/YOUR_USERNAME/cosmos-dashboard.git)
    ```

2.  **Navigate to the project directory**
    ```bash
    cd cosmos-dashboard
    ```

3.  **Open `index.html`**
    Simply double-click `index.html` to open it in your browser, or use a live server extension in VS Code.

---

## 🔑 API Configuration

This project uses a generic API Key. To avoid rate limits in production:
1.  Get a free API Key from [api.nasa.gov](https://api.nasa.gov/).
2.  Open `script.js`.
3.  Replace the `apiKey` variable with your own key:
    ```javascript
    const apiKey = 'YOUR_NEW_KEY_HERE';
    ```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> **Built with 💙 by [Your Name/Pseudonym]**
