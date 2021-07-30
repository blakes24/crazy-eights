import Card from "./Card";
import cards from "./cardDeck.json";

function Game() {
  return (
    <div className="Game">
      <Card
        image={cards[0].image}
        alt={`${cards[0].value} of ${cards[0].suit}`}
        face="up"
      />
      <Card
        image={cards[1].image}
        alt={`${cards[1].value} of ${cards[1].suit}`}
        face="down"
      />
    </div>
  );
}

export default Game;
