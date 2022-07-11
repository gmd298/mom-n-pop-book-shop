import { useSelector, useDispatch } from 'react-redux'
import { setSearch, fetchBooks } from './slices/search'

function SearchBar() {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search.search)

  const handleOnChange = (event) => {
    dispatch(setSearch(event.target.value));
    dispatch(fetchBooks());
  }

  function handleSubmit(event) {
    event.preventDefault();
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