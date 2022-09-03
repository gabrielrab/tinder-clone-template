import React from "react";
import Like from "../assets/svgs/like.svg";
import Deslike from "../assets/svgs/dislike.svg";

export default function CardAction() {
  return (
    <div className="card-actions">
      <div>
        <img src={Deslike} alt="deslike" />
      </div>
      <div>
        <img src={Like} alt="like" />
      </div>
    </div>
  );
}
