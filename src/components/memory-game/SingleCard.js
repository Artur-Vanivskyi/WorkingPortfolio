import React from "react";
import "./SingleCard.css";
import cover from "../../assets/img/cover.png";

function SingleCard({ card, handleChoice, flipped, disabled }) {


    const handleClick = () => {
        if(!disabled){
            handleChoice(card)
        }
       
    }


  return (
    <div className="card-game">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front-game" />
        <img
          className="back"
          src={cover}
          alt="card-back-game"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default SingleCard;
