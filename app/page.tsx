"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      <header>
        <div className="logo">
          <img src="/img/video.png" alt="Empy Movies Logo" />
          <p>Empy Movies</p>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`header-elements ${isMenuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/movies">Movies</a>
              </li>
              <li>
                <a href="/genres">Genres</a>
              </li>
              <li>
                <a href="/top-rated">Top Rated</a>
              </li>
              <li>
                <a href="/new-releases">New Releases</a>
              </li>
            </ul>
          </nav>
          <div className="search-bar">
            <input type="text" placeholder="Search for a movie" />
          </div>
        </div>
        <a href="/">
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
              href=""
            >
              Sign in
            </motion.a>
          </div>
        </div>
      </div>

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
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/badboypost.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/barbiepost.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/despicablepost.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/deadwolvposter.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/insideoutpost.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/johnwickpost.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/openpost.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/mermaidpost.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/spiderpost.jpg" />
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
