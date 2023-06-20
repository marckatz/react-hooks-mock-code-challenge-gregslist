import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({currentSearch}) {
  const [listings, setListings] = useState([]) 
  const [deleted, setDeteled] = useState(false)

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listings => setListings(listings))
  }, [deleted, currentSearch])

  function onDelete(id){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(() => setDeteled(!deleted))
  }

  return (
    <main>
      <ul className="cards">
        {listings.map(l => l.description.toLowerCase().startsWith(currentSearch.toLowerCase())? 
          <ListingCard key={l.id} listing={l} onDelete={onDelete}/> : null)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
