import styles from "./Card.module.css";

const Deck = ({ draw }) => {
  const src = "/card-back.jpg";
  const handleClick = () => draw("player");
  return (
    <div className={styles.main} onClick={handleClick}>
      <img src={src} alt="deck" />
    </div>
  );
};

export default Deck;
