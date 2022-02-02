import React, { useState, useEffect } from "react";
import "./NavBar.css";
function NavBar() {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${handleShow && "nav__black"}`}>
      <div className="nav__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="nav__avatar">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="TMDB"
        />
      </div>
    </div>
  );
}

export default NavBar;
