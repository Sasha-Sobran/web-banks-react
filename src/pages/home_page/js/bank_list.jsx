import React, { useState, useEffect } from "react";
import "../css/bank_list.css";
import BankListDiv from "../js/bank_div";
import ShowMoreButton from "./show_more_btn";
import getWaifus from "../../../api";

const BankList = () => {
  const [items, setItems] = useState([]);
  const [isViewMore, setIsViewMore] = useState(false);

  useEffect(() => {
    getWaifus().then((data) => {
      setItems(data);
    });
  }, []);

  const toggle = () => {
    setIsViewMore(!isViewMore);
    const element = document.getElementsByClassName("bank_list1")[0];
    if (!isViewMore) {
      const size = Math.ceil((items.length / 5) * 450) + "px";
      element.style.height = size;
    } else {
      element.style.height = "420px";
    }
  };

  return (
    <div className="second_section">
      <div className="bank_list1">
        {items.length > 0 ? (
          isViewMore ? (
            items.map((item) => BankListDiv(item.id, item))
          ) : (
            items.slice(0, 5).map((item) => BankListDiv(item.id, item))
          )
        ) : (
          <div className="loader">Loading...</div>
        )}
      </div>

      <div className="button_div">
        {isViewMore
          ? ShowMoreButton(toggle, "Hide")
          : ShowMoreButton(toggle, "View more")}
      </div>
    </div>
  );
};

export default BankList;
