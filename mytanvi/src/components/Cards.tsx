import styles from "../styles/Cards.module.css";

import { useState, useEffect } from "react";

import cardsData from "../cardsData.json"; // Import the JSON file

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData); // Load JSON data into state
  }, []);

  return (
    <div className={styles.cardsContainer}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <img src={card.image} alt={card.title} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
