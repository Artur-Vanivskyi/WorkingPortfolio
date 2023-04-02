import "./Game.css";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import helmet from "../../assets/img/helmet-1.png";
import potion from "../../assets/img/potion-1.png";
import ring from "../../assets/img/ring-1.png";
import scroll from "../../assets/img/scroll-1.png";
import shiled from "../../assets/img/shield-1.png";
import sword from "../../assets/img/sword-1.png";

const cardImages = [
  { src: helmet, matched: false },
  { src: potion, matched: false },
  { src: ring, matched: false },
  { src: scroll, matched: false },
  { src: shiled, matched: false },
  { src: sword, matched: false },
];

function Game() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    //gives us a chance to have 12 cards
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCrads) => {
          return prevCrads.map((card) => {
            if (card.src === choiceOne.src) {
              return {
                ...card,
                matched: true,
              };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
   <section id="game-zone">
      <div className="Game" id="game">
        <h1>Magic Match</h1>
        <div className="button-container">
        <button onClick={shuffleCards} className="gameButton">
          New Game
        </button>
        </div>
        <div className="card-grid-game">
          {cards.map((card) => (
            <SingleCard
              card={card}
              key={card.id}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <p>Turns: {turns}</p>
      </div>
     </section>
  );
}

export default Game;
