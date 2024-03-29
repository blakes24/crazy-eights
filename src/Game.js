import Card from "./Card";
import cards from "./cardDeck.json";
import { useState } from "react";
import { shuffle } from "./helpers";
import Hand from "./Hand";
import styles from "./Game.module.css";
import Deck from "./Deck";
import EndGame from "./EndGame";
import Suit from "./Suit";

function Game() {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [compHand, setCompHand] = useState([]);
  const [discard, setDiscard] = useState([]);
  const [playersTurn, setPlayersTurn] = useState(true);
  const [played, setPlayed] = useState(false);
  const [suit, setSuit] = useState(null);
  const [winner, setWinner] = useState(null);
  const [suitSelectOpen, setSuitSelectOpen] = useState(false)

  function deal() {
    let deckCards = shuffle([...cards]);
    let hand1 = [];
    let hand2 = [];
    for (let i = 0; i < 5; i++) {
      hand1.push(deckCards.pop());
      hand2.push(deckCards.pop());
    }
    let firstCard = deckCards.pop();
    //re-deal cards if top card is an eight
    if (firstCard.value === "8") {
      deal();
    } else {
      setDeck(deckCards);
      setPlayerHand(hand1);
      setCompHand(hand2);
      setDiscard([firstCard]);
      setSuit(firstCard.suit);
    }
  }

  function reset() {
    setDeck([]);
    setPlayerHand([]);
    setCompHand([]);
    setDiscard([]);
    setPlayersTurn(true);
    setPlayed(false);
    setWinner(null);
    setSuit(null);
    setSuitSelectOpen(false);
    deal();
  }

  function playCard(selected) {
    const topCard = discard[discard.length - 1];
    if (playersTurn) {
      // check that card is valid to play
      if (
        selected.suit === suit ||
        selected.value === topCard.value ||
        selected.value === "8"
      ) {
        const updatedHand = playerHand.filter(
          (card) => card.code !== selected.code
        );
        setDiscard((discard) => [...discard, selected]);
        setPlayerHand(updatedHand);
        // check for win condition
        if (updatedHand.length === 0) {
          setTimeout(() => {
            setWinner("player");
          }, 1000);
          setWinner("player");
        } else if (selected.value === "8") {
          setSuitSelectOpen(true);
        } else {
          setSuit(selected.suit);
          setPlayersTurn(false);
          setTimeout(() => {
            compPlay(selected, selected.suit);
          }, 1000);
        }
      }
    }
  }

  function compPlay(topCard = discard[discard.length - 1], currentSuit = suit) {
    let selected;
    for (let card of compHand) {
      if (
        card.suit === currentSuit ||
        card.value === topCard.value ||
        card.value === "8"
      ) {
        selected = card;
        break;
      }
    }
    // check if valid play was found, if not computer draws
    if (selected) {
      const updatedHand = compHand.filter(
        (card) => card.code !== selected.code
      );
      // pick a suit from computer's hand if 8 is selected
      if (selected.value === "8") {
        setSuit(compHand[0]?.suit);
      } else {
        setSuit(selected.suit);
      }
      setDiscard((discard) => [...discard, selected]);
      setCompHand(updatedHand);
      if (updatedHand.length === 0) {
        setTimeout(() => {
          setWinner("comp");
        }, 1000);
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
    // if deck is on last card shuffle discard pile to refresh deck
    if (deck.length === 1) {
      // player loses if there are no more cards to draw
      if (discard.length <= 1) {
        setWinner(player === "comp" ? "player" : "comp");
      }
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

  function selectSuit(suit) {
    setSuit(suit)
    setPlayersTurn(false);
    setSuitSelectOpen(false)
    setTimeout(() => {
      compPlay(discard[discard.length - 1], suit);
    }, 1000);
  }

  return (
    <div className={styles.main}>
      {winner ? (
        <EndGame winner={winner} reset={reset} />
      ) : (
        <div className={styles.container}>
          {deck.length === 0 ? (
            <>
              <button onClick={deal} className={styles.deal}>
                Deal
              </button>
              <Deck draw={deal} />
            </>
          ) : (
            <>
              <Hand cards={compHand} face="down" />
              <div className={styles.piles}>
                <div className={styles.suit}>
                  <Suit
                    suit={suit}
                    selectOpen={suitSelectOpen}
                    selectSuit={selectSuit}
                  />
                  {!suitSelectOpen && (
                    <button
                      onClick={played ? passTurn : undefined}
                      className={
                        played && playersTurn ? styles.passActive : styles.pass
                      }
                    >
                      Pass
                    </button>
                  )}
                </div>

                <Deck draw={draw} />
                <Card data={discard[discard.length - 1]} face="up" />
              </div>
              <Hand cards={playerHand} face="up" play={playCard} />
              <button onClick={reset} className={styles.restart}>
                New Game
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Game;
