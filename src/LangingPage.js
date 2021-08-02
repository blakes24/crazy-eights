import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import playCard from "./images/play-card.gif";
import playEight from "./images/eight.gif";
import drawCard from "./images/draw.gif";

function LandingPage() {
  return (
    <>
      <h1 className={styles.title}>Crazy Eights</h1>
      <div className={styles.main}>
        <div className={styles.rules}>
          <h3>How to Win</h3>
          <p>Be the first to discard all of your cards to win the game.</p>
          <Link to="/game" className={styles.play}>
            Start Game
          </Link>
          <h3>How to Play</h3>
          <p>
            Click on a card from your hand that matches either the suit or the
            value of the top card in the discard pile.{" "}
            <i>
              Example: If the top card is a six of clubs, you can play any card
              that is a club or a six.
            </i>
          </p>
          <img src={playCard} alt="play a card" className={styles.gif} />
          <p>
            If you don't have any cards that are playable you must click on the
            deck to draw a card. After drawing a card you can play a card, draw
            another card, or pass.
          </p>
          <img src={drawCard} alt="draw a card" className={styles.gif} />
          <p>
            Eights are wild and can be played at any time. When you play an
            eight you will choose what suit must be played next.
          </p>
          <img src={playEight} alt="play an eight" className={styles.gif} />
          <Link to="/game" className={styles.play}>
            Start Game
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
