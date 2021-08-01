import Card from "./Card";
import cards from "./cardDeck.json";
import { useState } from "react";
import { shuffle } from "./helpers";
import Hand from "./Hand";
import styles from "./Game.module.css";
import Deck from "./Deck";
import EndGame from "./EndGame";

function Game() {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [compHand, setCompHand] = useState([]);
  const [discard, setDiscard] = useState([]);
  const [playersTurn, setPlayersTurn] = useState(true);
  const [played, setPlayed] = useState(false);
  const [winner, setWinner] = useState(null);

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
    setDiscard([firstCard]);
  }

  function reset() {
    setDeck([]);
    setPlayerHand([]);
    setCompHand([]);
    setDiscard([]);
    setPlayersTurn(true);
    setPlayed(false);
    setWinner(null);
    deal();
  }

  function playCard(selected) {
    const topCard = discard[discard.length - 1];
    if (playersTurn) {
      // check that card is valid to play
      if (selected.suit === topCard.suit || selected.value === topCard.value) {
        const updatedHand = playerHand.filter(
          (card) => card.code !== selected.code
        );
        setDiscard((discard) => [...discard, selected]);
        setPlayerHand(updatedHand);
        if (updatedHand.length === 0) {
          setWinner("player");
        } else {
          setPlayersTurn(false);
          setTimeout(() => {
            compPlay(selected);
          }, 1000);
        }
      }
    }
  }

  function compPlay(topCard = discard[discard.length - 1]) {
    let selected;
    for (let card of compHand) {
      if (card.suit === topCard.suit || card.value === topCard.value) {
        selected = card;
        break;
      }
    }
    if (selected) {
      const updatedHand = compHand.filter(
        (card) => card.code !== selected.code
      );
      setDiscard((discard) => [...discard, selected]);
      setCompHand(updatedHand);
      if (updatedHand.length === 0) {
        setWinner("comp");
      }
    } else {
      draw("comp");
    }
    setPlayed(false);
    setPlayersTurn(true);
  }

  function draw(player) {
    const topCard = deck[deck.length - 1];
    if (player === "comp") {
      setCompHand((compHand) => [...compHand, topCard]);
    } else {
      if (playersTurn) {
        setPlayerHand((playerHand) => [...playerHand, topCard]);
        setPlayed(true);
      }
    }
    if (deck.length === 1) {
      setDeck(shuffle(discard.slice(0, -1)));
      setDiscard((discard) => [discard[discard.length - 1]]);
    } else {
      setDeck((deck) => deck.slice(0, -1));
    }
  }

  function passTurn() {
    setPlayersTurn(false);
    setTimeout(() => {
      compPlay();
    }, 1000);
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {deck.length === 0 ? (
          <>
            <button onClick={deal}>Deal</button>
            <Deck draw={draw} />
          </>
        ) : (
          <>
            {winner && <EndGame winner={winner} reset={reset} />}
            <Hand cards={compHand} face="down" />
            <div className={styles.piles}>
              <button onClick={played ? passTurn : undefined}>Pass</button>
              <Deck draw={draw} />
              <Card data={discard[discard.length - 1]} face="up" />
            </div>
            <Hand cards={playerHand} face="up" play={playCard} />
          </>
        )}
      </div>
    </div>
  );
}

export default Game;
