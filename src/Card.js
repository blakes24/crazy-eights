import "./Card.css";

const Card = ({ image, alt, face }) => {
  let src = face === "up" ? image : "/card-back.jpg";
  return (
    <div className="Card">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Card;
