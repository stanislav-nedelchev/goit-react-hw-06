import css from './SearchBox.module.css';

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Enter keyword to search"
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
