import React, { useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const url = 'http://localhost:6001/listings';


function App() {

  const [search, setSearch] = useState('');
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(listingsArray =>  setListings(listingsArray));
  }, [])

  const removeListing = id => {
    fetch(`${url}/${id}`, {method: 'DELETE'})
      .then(() => {
        const newListings = listings.filter(listingObj => listingObj.id !== id)
        setListings(newListings)
      })
  }

  const submitSearch = someString => {
    setSearch(someString);
  }


  const searchedListings = listings.filter(listingObj => {
    return listingObj.description.toLowerCase().includes(search.toLowerCase());
  })

 

  return (
    <div className="app">
      <Header submitSearch={submitSearch} />
      <ListingsContainer removeListing={removeListing} 
        listings={searchedListings}/>
    </div>
  );
}

export default App;
