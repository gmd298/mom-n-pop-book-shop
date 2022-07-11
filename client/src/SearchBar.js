import React, {useState} from 'react'

function SearchBar() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  function searchResults() {
    const filteredListings = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
    })
    setListings(filteredListings)
  }

// How do I handle the search? Do I need to include multiple fetch requests? 
// How can I use this in Books.js AND Authors.js?

  // useEffect(() => {
  //   fetch('http://localhost:6001/listings')
  //   .then(response => response.json())
  //   .then(data => setListings(data))
  // }, [])

  const handleOnChange = (event) => setSearch(event.target.value)

  function handleSubmit(event) {
    event.preventDefault();
    searchResults();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search..."
        value={search}
        onChange={handleOnChange}
      />
      <button onSubmit={handleSubmit} type="submit">🔍</button>
    </form>
  )
}

export default SearchBar;