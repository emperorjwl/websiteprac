"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, Autoplay, Keyboard } from 'swiper/modules';
import {motion} from 'framer-motion'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface MovieDetail {
  movietitle: string;
  title: string;
  year: string;
  rating: string;
  duration: string;
  genre: string;
  description: string;
  backgroundImage: string;
}

const movieDetails: MovieDetail[] = [
  {
    movietitle: "/img/deadwolvtitle.png",
    title: "Deadpool and Wolverine",
    year: "2024",
    rating: "17+",
    duration: "2h 8m",
    genre: "Action, Comedy",
    description:
      "Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat.",
    backgroundImage: "/img/deadwolvimg.jpg",
  },
  {
    movietitle: "/img/despicabletitle.png",
    title: "Despicable Me 4",
    year: "2024",
    rating: "PG",
    duration: "1h 34m",
    genre: "Animation, Action",
    description:
      "Gru welcomes a new member to the family, Gru Jr., who's intent on tormenting his dad. However, their peaceful existence soon comes crashing down when criminal mastermind Maxime Le Mal escapes from prison and vows revenge against Gru.",
    backgroundImage: "/img/despicableimg.jpg",
  },
  {
    movietitle: "/img/the-little-mermaid-title.png",
    title: "The Little Mermaid",
    year: "2023",
    rating: "12+",
    duration: "2hr 14min",
    genre: "Romance",
    description:
      "The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure. Longing to find out more about the world beyond the sea, Ariel visits the surface and falls for the dashing Prince Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, to experience life on land.",
    backgroundImage: "/img/bg-little-mermaid3.jpg",
  },
  {
    movietitle: "/img/insideouttitle.png",
    title: "Inside Out 2",
    year: "2024",
    rating: "PG",
    duration: "1hr 37min",
    genre: "Animation",
    description:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    backgroundImage: "/img/insideoutimg.jpg",
  },
  {
    movietitle: "/img/bdboystitle.webp",
    title: "Bad Boys Ride or Die",
    year: "2024",
    rating: "15",
    duration: "1hr 55min",
    genre: "Action, Thriller",
    description:
      "When their late police captain gets linked to drug cartels, wisecracking Miami cops Mike Lowrey and Marcus Burnett embark on a dangerous mission to clear his name.",
    backgroundImage: "/img/badboysimg.jpg",
  },
  {
    movietitle: "/img/oppentitle.png",
    title: "Oppenheimer",
    year: "2023",
    rating: "15",
    duration: "3hr",
    genre: "Drama, History",
    description:
      "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
    backgroundImage: "/img/oppenimg.jpg",
  },
  {
    movietitle: "/img/barbietitle.png",
    title: "Barbie",
    year: "2023",
    rating: "PG13",
    duration: "1hr 54min",
    genre: "Adventure",
    description:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    backgroundImage: "/img/barbieimg.jpg",
  },
  {
    movietitle: "/img/spidertitle.webp",
    title: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    rating: "PG",
    duration: "1hr 20 min",
    genre: "Animation, Action",
    description:
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    backgroundImage: "/img/spiderimg.jpg",
  },
];

export default function App() {
  return (
    <main>

      <header>
        <img src="/img/video.png" alt="Logo" />
        <h3>Empy Movies</h3>
        <div className="header-title">
          <h4>Adults</h4>
          <h4>Kids</h4>
          <h4>Trending</h4>
          <h4>My Library</h4>
        </div>
        <div className="searchbox">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            placeholder="Search for a movie"
            type="text"
            aria-label="Search for a movie"
          />
        </div>
      </header>
      
      <Swiper
        direction={'vertical'}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        keyboard={{ enabled: true }}
        modules={[Pagination, Navigation, Scrollbar, Autoplay, Keyboard]}
        loop={true} 
        className="mySwiper"
      >
        {movieDetails.map((movie, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${movie.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              color: 'white',
            }}
            className='swiper-slide'
          >
            <div className="slide-content">
              <img src={movie.movietitle} alt={movie.title} className='movie-title-image'/>
              <div className="about">
                <p className='nice'>{movie.year} |</p>
                <span className='rating'>{movie.rating}</span>
                <p className='nice'>| {movie.duration} |</p>
                <p className='nice'>{movie.genre}</p>
              </div>
              <p className='desc'>{movie.description}</p>
            </div>

            <div className="activities">
              <span className='watch'><i className="fa fa-play-circle" aria-hidden="true"></i> WATCH</span>
              <span className='add'><i className="fa fa-plus" aria-hidden="true"></i>  ADD TO LIBRARY</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        <div className="signup">
          <img src="/img/netflix image.jpg" alt="" />
          <div className="signupdesc">
            <motion.h2 
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1,y:0, transition:{delay:0.2, duration:0.5}}}
            viewport={{once:false,amount:.5}}>
              Unlimited movies, TV shows, and more
            </motion.h2>

            <motion.p initial={{opacity:0, y:50}}
            whileInView={{opacity:1,y:0, transition:{delay:0.2, duration:0.6}}}
            viewport={{once:false,amount:.5}}>
              Starts at US$2.99. Cancel anytime.
            </motion.p>

            <motion.button initial={{opacity:0, y:50}}
            whileInView={{opacity:1,y:0, transition:{delay:0.2, duration:0.6}}}
            viewport={{once:false,amount:.5}}>
              Sign Up
            </motion.button>

            <div className="already">
              <motion.span initial={{opacity:0, y:50}}
              whileInView={{opacity:1,y:0, transition:{delay:0.2, duration:1}}}
              viewport={{once:false,amount:.5}}className='account'>
                Already have an account? 
              </motion.span>
              <motion.a initial={{opacity:0, y:50}}
              whileInView={{opacity:1,y:0, transition:{delay:0.2, duration:1}}}
              viewport={{once:false,amount:.5}} href="">Sign in</motion.a>
            </div>
          </div>
        </div>
    </main>
    
  );
}
