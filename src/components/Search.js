const Search = async (query) => {
    try {
      const response = await fetch(`https://api.example.com/search?q=${query}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export default Search;