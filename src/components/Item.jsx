import React from "react";
import "../assets/css/Item.css";

const Item = ({ name, category, cover, Download }) => (
    <div className="item-container">
        <div className="mobile-png flex">
            <div className="cover flex" style={{ backgroundImage: `url(${cover})` }}></div>
        </div>
        <small className="smaller">{name} - {category}</small>
        <div className="down-btn flex">
            <a href={Download} target="_blank" rel="noopener noreferrer">Download</a>
        </div>
    </div>
);

export default Item;
