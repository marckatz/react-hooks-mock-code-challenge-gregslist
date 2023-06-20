import React, {useState} from "react";

function ListingCard({listing, onDelete}) {
  const [favorited, setFavorited] = useState(false)
  const {description, image, location} = listing

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button onClick={() => setFavorited(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorited(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => onDelete(listing.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
