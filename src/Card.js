import styles from "./Card.module.css";

const Card = ({ data, face, play }) => {
  const src = face === "up" ? data.image : "/card-back.jpg";
  const handleClick = () => play(data);
  return (
    <div className={styles.main} onClick={play ? handleClick : null}>
      <img src={src} alt={`${data.value} of ${data.suit}`} />
    </div>
  );
};

export default Card;
