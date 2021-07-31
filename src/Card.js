import './Card.css';

const Card = ({ data, face }) => {
	let src = face === "up" ? data.image : "/card-back.jpg"
	return (
    <div className="Card">
      <img src={src} alt={`${data.value} of ${data.suit}`} />
    </div>
  );
};

export default Card;
