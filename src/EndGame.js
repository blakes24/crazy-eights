import styles from "./EndGame.module.css";

function EndGame({ winner, reset }) {
  return (
    <div className={styles.main}>
      <h1>{winner === "player" ? "You Win!" : "You Lose!"}</h1>
      <div className={styles.emoji}>
        {winner === "player" ? "🏆" : "👎"}
      </div>
      <button onClick={reset}>New Game</button>
    </div>
  );
}

export default EndGame;
