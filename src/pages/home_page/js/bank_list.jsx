import React, { useState, useEffect } from "react";
import "../css/bank_list.css";
import BankListDiv from "./bank_div";

const BankList = () => {
  const [items, setItems] = useState([]);
  const [isViewMore, setIsViewMore] = useState(false);

  useEffect(() => {
    async function fetchBanks() {
      try {
        const response = await fetch("http://127.0.0.1:5000/banks");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchBanks();
  }, []);

  const toggle = () => {
    setIsViewMore(!isViewMore);
    const element = document.getElementsByClassName("bank_list")[0];
    if (!isViewMore) {
      let size = Math.ceil((items.length / 5) * 400) + "px";
      element.style.height = size;
    } else {
      element.style.height = "400px";
    }
  };

  return (
    <div className="second_section">
      <div className="bank_list">
        {isViewMore
          ? items.map((item) => BankListDiv(item.id, item))
          : items.slice(0, 5).map((item) => BankListDiv(item.id, item))}
      </div>
      <div className="button_div">
        {isViewMore ? (
          <button onClick={toggle}>View less</button>
        ) : (
          <button onClick={toggle}>View more</button>
        )}
      </div>
    </div>
  );
};

export default BankList;
