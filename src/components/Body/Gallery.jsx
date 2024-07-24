import React, { useState } from "react";
import "./Gallery.css";
import { IoMdClose } from "react-icons/io";
import birthday from "../../assets/Untitled-1.png";
import Events from "../../assets/gametournament.png";
import Personal from "../../assets/imagemerge.png";
import Logo from "../../assets/VoiceChat.png";
import Poster from "../../assets/poster.jpg";
import Card from "../../assets/business card.png";
const Gallery = () => {
  const [box, setBox] = useState([
    {
      id: 1,
      img: birthday,
      description: "Birthday",
    },
    {
      id: 2,
      img: Events,
      description: "Events",
    },
    {
      id: 3,
      img: Personal,
      description: "Personal Project",
    },
    {
      id: 4,
      img: Logo,
      description: "Logo",
    },
    {
      id: 5,
      img: Poster,
      description: "Poster",
    },
    {
      id: 6,
      img: Card,
      description: "Business Card",
    },
  ]);
  const showBox = true;

  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };
  return (
    <div id="Gallery">
      <div className="boxes">
        {box.map((box) => {
          return (
            <div id="box" onClick={showMenu} key={box.id}>
              {menu ? (
                <div id="menu">
                  <div>
                    <IoMdClose id="icon" onClick={showMenu} />
                  </div>
                  <img src={box.img} alt="birthday" />
                </div>
              ) : (
                <></>
              )}
              <img src={box.img} alt="birthday" />
              <div id="description">
                {" "}
                <h4>{box.description}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
