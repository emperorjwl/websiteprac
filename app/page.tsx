"use client";

import React, { useState, FormEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

interface MovieResult {
  id: string;
  title: string;
  year?: string;
  poster?: string;
  description?: string;
}

interface ApiResponseItem {
  id: string;
  l: string;
  y?: number;
  i?: {
    imageUrl: string;
  };
  qid?: string;
}

const SearchResultsOverlay: React.FC<{
  results: MovieResult[];
  isVisible: boolean;
  onClose: () => void;
}> = ({ results, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="search-results-overlay">
      <div className="search-results-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Search Results</h2>
        <div className="movie-grid">
          {results.map((movie: MovieResult) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-poster">
                <img src={movie.poster} alt={movie.title} />
              </div>
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-year">{movie.year || "N/A"}</p>
                <p className="movie-description">{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<MovieResult[]>([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError("");
    setSearchResults([]);

    const autoCompleteUrl =
      "https://online-movie-database.p.rapidapi.com/auto-complete";
    const detailsUrl =
      "https://online-movie-database.p.rapidapi.com/title/get-overview-details";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
        "x-rapidapi-host": "online-movie-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(
        `${autoCompleteUrl}?q=${encodeURIComponent(searchQuery)}`,
        options
      );
      const result = await response.json();

      console.log("API Response:", result);

      if (result && Array.isArray(result.d)) {
        const moviePromises = result.d
          .filter(
            (item: ApiResponseItem) =>
              item.qid === "movie" || item.qid === "tvSeries"
          )
          .map(async (item: ApiResponseItem) => {
            const detailsResponse = await fetch(
              `${detailsUrl}?tconst=${item.id}&currentCountry=US`,
              options
            );
            const detailsResult = await detailsResponse.json();

            return {
              id: item.id,
              title: item.l,
              year: item.y ? item.y.toString() : "N/A",
              poster: item.i ? item.i.imageUrl : "/img/placeholder.jpg",
              description:
                detailsResult.plotOutline?.text ||
                detailsResult.plotSummary?.text ||
                "No description available.",
            };
          });

        const formattedResults = await Promise.all(moviePromises);
        setSearchResults(formattedResults);
        setIsOverlayVisible(true);
      } else {
        setSearchResults([]);
        setError("No results found");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("An error occurred while searching. Please try again later.");
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  return (
    <main>
      <header>
        <a href="#">
          <div className="logo">
            <img src="/img/video.png" alt="Empy Movies Logo" />
            <p>Empy Movies</p>
          </div>
        </a>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`header-elements ${isMenuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li>
                <a href="/signinpage">Sign in</a>
              </li>
            </ul>
          </nav>
          <div className="search-bar">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search for a movie"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
        <a href="/profile">
          <img src="/img/user.png" alt="User Icon" className="usericon" />
        </a>
      </header>

      <div className="signup">
        <img src="/img/netflix image.jpg" alt="Signup Banner" />
        <div className="signupdesc">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Unlimited movies, TV shows, and more
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.6 },
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Starts at US$2.99. Cancel anytime.
          </motion.p>
          <Link href="/loginpage">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.6 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Sign Up
            </motion.button>
          </Link>
          <div className="already">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 1 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              className="account"
            >
              Already have an account?
            </motion.span>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 1 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              href="/loginpage"
            >
              Sign in
            </motion.a>
          </div>
        </div>
      </div>

      {isLoading && <p>Loading...</p>}

      <SearchResultsOverlay
        results={searchResults}
        isVisible={isOverlayVisible}
        onClose={closeOverlay}
      />

      <div className="showing">
        <p>Now Showing</p>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/sheldonpost.jpg" alt="Bad Boy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/badboypost.jpg" alt="Bad Boy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/barbiepost.jpg" alt="Barbie" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/peakypost.jpg" alt="Barbie" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/despicablepost.jpg" alt="Despicable Me" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/deadwolvposter.jpg" alt="Deadpool" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/insideoutpost.jpg" alt="Inside Out" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/theboyspost.jpg" alt="Inside Out" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/johnwickpost.jpg" alt="John Wick" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/openpost.jpg" alt="Open" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/mermaidpost.jpg" alt="Mermaid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/spiderpost.jpg" alt="Spider-Man" />
        </SwiperSlide>
      </Swiper>

      <div className="join">
        <p>More Reasons to Sign Up</p>
      </div>

      <div className="reasons">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="card-title">Enjoy on your TV</p>
          <p className="small-desc">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="card-title">Download your shows to watch offline</p>
          <p className="small-desc">
            Save your favorites easily and always have something to watch.
          </p>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="card-title">Watch everywhere</p>
          <p className="small-desc">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </motion.div>
      </div>

      <footer>
        <p className="questions">
          Questions? <a href="contact-us">Contact Us</a>
        </p>

        <div className="column1">
          <a href="/account">
            <span className="footdesc">Account</span>
          </a>
          <a href="/ways-to-watch">
            <span className="footdesc">Ways to watch</span>
          </a>
          <a href="/only-on-empy-movies">
            <span className="footdesc">Only on Empy Movies</span>
          </a>
        </div>

        <div className="column2">
          <span>
            <p>© 2024, Empy Movies</p>
          </span>
        </div>
      </footer>
    </main>
  );
}
