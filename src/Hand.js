import Card from "./Card";
import styles from "./Hand.module.css";

function Hand({ cards, face, play }) {
  return (
    <div className={styles.main}>
      {cards.map((card) => (
        <Card
          data={card}
          face={face}
          key={card.code}
          play={play}
        />
      ))}
    </div>
  );
}

export default Hand;
