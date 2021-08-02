import styles from "./Suit.module.css";

function Suit({ suit, selectOpen, selectSuit }) {
  const suitOptions = { HEARTS: "♥", SPADES: "♠", DIAMONDS: "♦", CLUBS: "♣" };
  return (
    <>
      {selectOpen ? (
        <div className={styles.select}>
          {Object.keys(suitOptions).map((option) => (
            <div
              onClick={() => selectSuit(option)}
              style={{
                color:
                  option === "HEARTS" || option === "DIAMONDS"
                    ? "red"
                    : "black",
              }}
              className={styles.options}
              arial-label={option}
              key={option}
            >
              {suitOptions[option]}
            </div>
          ))}
        </div>
      ) : (
        <div
          className={styles.current}
          style={{
            color: suit === "HEARTS" || suit === "DIAMONDS" ? "red" : "black",
          }}
          arial-label={suit}
        >
          {suitOptions[suit]}
        </div>
      )}
    </>
  );
}

export default Suit;
