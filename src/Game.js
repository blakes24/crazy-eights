import Card from "./Card";
import cards from "./cardDeck.json";
import { useState } from "react";
import { shuffle } from "./helpers";
import Hand from "./Hand";
import styles from "./Game.module.css";

function Game() {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [compHand, setCompHand] = useState([]);
  const [discard, setDiscard] = useState(null);
  const [playersTurn, setPlayersTurn] = useState(true);

  function deal() {
    let deckCards = shuffle([...cards]);
    let hand1 = [];
    let hand2 = [];
    for (let i = 0; i < 5; i++) {
      hand1.push(deckCards.pop());
      hand2.push(deckCards.pop());
    }
    let firstCard = deckCards.pop();
    setDeck(deckCards);
    setPlayerHand(hand1);
    setCompHand(hand2);
    setDiscard(firstCard);
  }

  function playCard(selected) {
    if (playersTurn) {
      // check that card is valid to play
      if (selected.suit === discard.suit || selected.value === discard.value) {
        const updatedHand = playerHand.filter(
          (card) => card.code !== selected.code
        );
        setDiscard(selected);
        setPlayerHand(updatedHand);
        setPlayersTurn(false);
      }
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <button onClick={deal}>Deal</button>
        {discard && (
          <>
            <Hand cards={compHand} face="down" />
            <div className={styles.piles}>
              <Card data={deck[0]} face="down" />
              <Card data={discard} face="up" />
            </div>
            <Hand cards={playerHand} face="up" play={playCard} />
          </>
        )}
      </div>
    </div>
  );
}

export default Game;
