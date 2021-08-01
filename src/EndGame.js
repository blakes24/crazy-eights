function EndGame({ winner, reset }) {
  return (
    <div>
      <h1>{winner === "player" ? "You Win!" : "You Lose!"}</h1>
      <button onClick={reset}>New Game</button>
    </div>
  );
}

export default EndGame;
