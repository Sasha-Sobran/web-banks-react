import React from "react";
import "../css/bank.css";
import { images } from "../../../images_constants";

const BankListDiv = (key, item) => {
  return (
    <div className="bank_item" key={key}>
      <div className="center">
        <img className="div_img" src={images[item.image]} alt={item.title} />
      </div>
      <h2 className="center">{item.title}</h2>
      <p className="center">{item.description}</p>
    </div>
  );
};

export default BankListDiv;
