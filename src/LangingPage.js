import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import playCard from "./images/play-card.gif";
import playEight from "./images/eight.gif";
import drawCard from "./images/draw.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


function LandingPage() {
  return (
    <>
      <div className={styles.title}>
        <h1>Crazy Eights</h1>
        <div className={styles.buttons}>
          <a href="#about" className={styles.play}>
            Learn More
          </a>
          <Link to="/game" className={styles.play}>
            Play Now
          </Link>
        </div>
      </div>
      <div className={styles.main} id="about">
        <div className={styles.rules}>
          <h2>How to Play</h2>
          <p>Be the first to discard all of your cards to win the game.</p>
          <div className={styles.row}>
            <div className={styles.rowText}>
              <h3>Play a card</h3>
              <p>
                Click on a card from your hand that matches either the suit or
                the value of the top card in the discard pile.{" "}
                <i>
                  Example: If the top card is a six of clubs, you can play any
                  card that is a club or a six.
                </i>
              </p>
            </div>
            <img src={playCard} alt="play a card" className={styles.gif} />
          </div>
          <div className={`${styles.row} ${styles.reverse}`}>
            <div className={styles.rowText}>
              <h3>Draw a card</h3>
              <p>
                If you don't have any cards that are playable you must click on
                the deck to draw a card. After drawing a card you can play a
                card, draw another card, or pass.
              </p>
            </div>
            <img src={drawCard} alt="draw a card" className={styles.gif} />
          </div>
          <div className={styles.row}>
            <div className={styles.rowText}>
              <h3>Eights are wild</h3>
              <p>
                Eights can be played at any time. When you play an eight you get
                to choose what suit must be played next.
              </p>
            </div>

            <img src={playEight} alt="play an eight" className={styles.gif} />
          </div>
        </div>
        <Link to="/game" className={styles.play}>
          Start Game
        </Link>
      </div>
      <footer className={styles.footer}>
        Blakely Burns
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/blakelyburns/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/blakes24/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="mailto:burnsblakely@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
