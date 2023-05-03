import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import data from '../data/data.json'

function Five() {
  // Declare state variables for contacts, search query, and favorite filter
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  // Load contacts from data.json on initial render

  //The json file provided in the exercise was uncapable of fetching
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedContacts = data.map((contact) => {
      return storedFavorites.includes(contact.id)
        ? { ...contact, favorite: true }
        : contact;
    });
    setContacts(updatedContacts);
  }, []);

  // Handle search input changes
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Toggle contact as favorite
  const toggleFavorite = (contact) => {
    const updatedContacts = contacts.map((item) => {
      if (item.id === contact.id) {
        item.favorite = !item.favorite;
      }
      return item;
    });
    setContacts(updatedContacts);

    const favorites = updatedContacts
      .filter((item) => item.favorite)
      .map((item) => item.id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  // Filter displayed contacts based on search and favorites
  const displayContacts = contacts.filter((contact) => {
    const searchValue = search.toLowerCase();
    const firstName = contact.first_name ? contact.first_name.toLowerCase() : "";
    const lastName = contact.last_name ? contact.last_name.toLowerCase() : "";
    const inSearch = firstName.includes(searchValue) || lastName.includes(searchValue);
    if (showFavorites) {
      return inSearch && contact.favorite;
    }
    return inSearch;
  });


 // Render contact list
  return (
    <div className=" tc five code">
      <h1>Contact List</h1>
      <input
      style={{width:"50%",
    marginLeft:"200px"}}
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by first name or last name..."
      />
      <label>
        <div>
        <div className="pa3 white">
        <input
          type="checkbox"
          checked={showFavorites}
          onChange={(e) => setShowFavorites(e.target.checked)}
        />
        Show favourites Only
        </div>
        </div>
      </label>
      {displayContacts.map((contact, index) => (
        <div 
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",}}>
        <div
        style={{
            width: "30%",}} 
        key={contact.id || index} 
        className="contact-card">
          <img
            src={contact.image}
            alt={`${contact.first_name} ${contact.last_name}`}
            className="contact-image"
          />
          <div>
           <p>{contact.first_name} {contact.last_name}</p>
          </div>
          <div className="favorite" onClick={() => toggleFavorite(contact)}>
            <p>{contact.favorite ? "★" : "☆"}</p>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Five;
