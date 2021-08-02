import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <div className={styles.title}>
        <h1>Crazy Eights</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.rules}>
          <h2>Rules</h2>
          <h3>How to Play</h3>
          <p>
            Click on a card from your hand that matches either the suit or the
            value of the top card in the discard pile.{" "}
            <i>
              Example: If the top card is a six of clubs, you can play any card
              that is a club or a six.
            </i>
          </p>
          <p>
            If you don't have any cards that are playable you must click on the
            deck to draw a card. After drawing a card you can play a card, draw
            another card, or pass.
          </p>
          <p>
            Eights are wild and can be played at any time. When you play an
            eight you will choose what suit must be played next.
          </p>
          <h3>How to Win</h3>
          <p>Be the first to discard all of your cards to win the game.</p>
          <Link to="/game" className={styles.play}>
            Play Game
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
