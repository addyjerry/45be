import React from "react";
import "./Home.css";
import eye from "../../assets/eye.png";
import imagemerge from "../../assets/imagemerge.png";
import burning from "../../assets/burning.png";
import gametournament from "../../assets/gametournament.png";
import businessCard from "../../assets/business card.png";
import VoiceChat from "../../assets/VoiceChat.png";
import Untitled from "../../assets/Untitled-1.png";
import { easeIn, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="Home">
      <div id="first">
        <div id="text__area">
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeIn }}
          >
            <div>
              Contact us for all your graphic design and web application
              projects
            </div>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmbDmKLJxbKqwSbkKHlvZxcHJwTsDCKnnmrZdKDhjtgjKKfHtLfZbVQQKFZSJKpKVjFL">
              <button>Contact us</button>
            </a>
            <div>
              Let's work together to bring your dreams and ideas to reality
            </div>
          </motion.h3>
        </div>
        <motion.div
          id="image__area"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: easeIn }}
        >
          <Link to="/Gallery">
            {" "}
            <div id="image__box">
              <img src={eye} alt="pictures" />
              <img src={imagemerge} alt="pictures" />
              <img src={burning} alt="pictures" />
              <img src={gametournament} alt="pictures" />
              <img src={businessCard} alt="pictures" />
              <img src={VoiceChat} alt="pictures" />
              <img src={Untitled} alt="pictures" />
            </div>
          </Link>
        </motion.div>
      </div>
      <div id="second">
        <section id="Web__tools">
          <h4>Web development</h4>
          <ul>
            <li>React js</li>
            <li>Node js</li>
            <li>Mysql</li>
            <li>PHP</li>
          </ul>
        </section>
        <section id="graphic__tools">
          <h4>Graphic design</h4>
          <ul>
            <li>Photoshop</li>
            <li>Canva</li>
            <li>Krita</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
