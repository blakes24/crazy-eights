import "./Card";

const Deck = ({ draw }) => {
  const src = "/card-back.jpg";
  const handleClick = () => draw("player");
  return (
    <div className="Card" onClick={handleClick}>
      <img src={src} alt="deck" />
    </div>
  );
};

export default Deck;
