import React from "react";
import MacWindow from "../MacWindow/MacWindow";
import "./spotify.scss";

function Spotify() {
  return (
    <MacWindow width="30vw"> 
      <div className="spotify-window">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM?utm_source=generator&theme=0"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
}

export default Spotify;
