import React from "react";
import "../css/bank.css";
import { anime_images } from "../../../images_constants";

const BankListDiv = (key, item) => {
  const truncatedDescription =
    item.description.length > 120
      ? item.description.slice(0, 120) + "..."
      : item.description;

  return (
    <div className="bank_item" key={key}>
      <div className="center">
        <img
          className="div_img"
          src={anime_images[item.image]}
          alt={item.name}
        />
      </div>
      <h2 className="name">{item.name}</h2>
      <p className="description">{truncatedDescription}</p>
    </div>
  );
};

export default BankListDiv;
