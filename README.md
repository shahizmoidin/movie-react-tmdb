# 🎬 Movie List App using TMDB API (React + Vite)

This is a React-based application that fetches and displays a list of popular movies using [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api). Users can search for specific movies and view their details.

## 🌟 Features
- View a list of popular movies fetched from the TMDB API.
- Search for specific movies using the search bar.
- Responsive movie grid layout.
- Vite for fast development and optimized builds.

---

## 🛠️ Technologies Used
- **React** (with hooks)
- **Vite** (for fast builds)
- **TMDB API** (to fetch movie data)
- **CSS/SCSS** (for styling)

---

## 📦 Installation and Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/movie-list-app.git
cd movie-list-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a `.env` file
At the root of the project, create a `.env` file to store the environment variables:

```env
VITE_API_KEY=your_tmdb_api_key
VITE_API_URL=https://api.themoviedb.org/3
```

> **Note:** You can get your API key by creating an account on [The Movie Database](https://www.themoviedb.org/).

---

### 4. Run the development server
```bash
npm run dev
```

This will start the development server at `http://localhost:5173/` (or another port if specified).

---

## 🚀 Building for Production
To create an optimized build for production:
```bash
npm run build
```

Then, you can serve the production build using:
```bash
npm run preview
```

---

## 🛠️ Project Structure

```
movie-list-app/
├── public/                     # Static assets
├── src/                        # Application source code
│   ├── components/             # Reusable components (e.g., MovieCard)
│   ├── services/               # API service logic
│   ├── App.jsx                 # Main app component
│   └── css/                    # CSS styles
├── .env                        # Environment variables
├── vite.config.js              # Vite configuration
├── package.json                # Project metadata
└── README.md                   # Project documentation
```

---

## 🌐 Links
- [TMDB API Documentation](https://www.themoviedb.org/documentation/api)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)

---


## 📈 Contributing
Feel free to fork the project and submit a pull request if you have any improvements!

---

