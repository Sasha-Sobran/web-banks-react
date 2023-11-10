import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWaifu } from "../../api";
import "./card_page.css";
import { anime_images } from "../../images_constants";
import { NavLink } from "react-router-dom";

const CardPage = () => {
  const { id } = useParams();
  const [waifu, setWaifu] = useState(null);

  useEffect(() => {
    async function fetchWaifu() {
      try {
        const waifuData = await getWaifu(id);
        setWaifu(waifuData);
      } catch (error) {
        console.error("Помилка отримання даних:", error);
      }
    }

    fetchWaifu();
  }, [id]);

  return (
    <div>
      {waifu ? (
        <div className="card_item_page">
          <div className="item_title">
            <img
              className="card_item_image"
              src={anime_images[waifu.image]}
              alt={waifu.name}
            />
            <h1>{waifu.name}</h1>
          </div>
          <div className="column">
            <div className="price_age2">
              <h2>Price: {waifu.price}</h2>
              <h2>Age: {waifu.age}</h2>
            </div>
            <p className="waifu_description">{waifu.description}</p>
            <div className="buttons">
              <button className="cart_page_button">Buy now</button>
              <NavLink className="cart_page_button" to={`/catalog`}>
                Back
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div class="loader">Loading...</div>
      )}
    </div>
  );
};

export default CardPage;
