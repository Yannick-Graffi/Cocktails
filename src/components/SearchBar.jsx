function SearchBar({onChange,onSubmit}) {
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input type="text" onChange={onChange} />
            <button type="submit">Chercher</button>
        </form>
      );
}

export default SearchBar;