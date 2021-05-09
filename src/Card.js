import { useState } from "react";
import "./Card.css";

function Card({ name, url, progress }) {
  return (
    <div className="card">
      <div className="upper-card">
        <div className="upper-image">
          <img src={url} width="120px" height="120px"></img>
        </div>
        <div className="upper-body">
          <h3>Welcome back,</h3>
          <h2>{name}</h2>
          <p>
            &nbsp;&nbsp;
            <ion-icon name="trophy-outline"></ion-icon>
            World Champ
          </p>
          <button class="button">UPGRADE NOW</button>
        </div>
      </div>
      <div className="lower-card">
        <p>Setup your account</p>
        <progress class="progress is-info" value={progress} max="100">
          80%
        </progress>
      </div>
    </div>
  );
}

export default Card;
