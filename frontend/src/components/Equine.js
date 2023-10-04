import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Equine() {
  const [equineData, setEquineData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/equine")
      .then((response) => {

        setEquineData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching equine data:", error);
      });
  }, []);

  const feedCard = equineData.map((product, index) => (
    <div className="card flex centered" key={index}>
      <img
        className="card-img margin-15"
        src={product.url}
        alt={product.name}
      />
      <div className="centered">
        <h1 className="card-header bold">{product.name}</h1>
        <p className="card-text">{product.description}</p>
        <p className="bold card-text">Price per bag: {product.pricePerBag}</p>
        <p className="bold card-text">Price per 20 bags: {product.pricePer20}</p>
        <p className="bold card-text">Price per 40 bags: {product.pricePer40}</p>
      </div>
    </div>
  ));

  return (
    <div className="centered">
      <h2 className="bold margin-15 feed-header">Equine Feed</h2>
      <div className="flex card-section border">
        {feedCard}
      </div>
    </div>
    );
}
