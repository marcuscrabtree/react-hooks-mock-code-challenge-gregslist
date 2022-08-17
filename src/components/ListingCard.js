import React, { useState } from "react";

function ListingCard({ listing, removeListing }) {

  const [liked, setLiked] = useState(false);

  const likeButton = () => {
    setLiked(liked => !liked)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={likeButton} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={likeButton} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={() => removeListing(listing.id)} 
          className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
