import axios from 'axios';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

const API_URL = 'https://ih-beers-api2.herokuapp.com';

function Searchbar({ setAllBeers }) {
  const [query, setQuery] = useState('');

  const searchBeers = async () => {
    const response = await axios.get(`${API_URL}/beers/search?q=${query}`);
    setAllBeers(response.data);
  };

  useEffect(() => {
    searchBeers();
  }, [query]);

  return (
    <>
      <TextField
        id="search"
        label="Search Beers"
        variant="outlined"
        type="search"
        name="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        sx={{ width: '100%' }}
      />
      {/* <label htmlFor="search">Search beers</label>
      <input
        type="search"
        name="search"
        id="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      /> */}
    </>
  );
}

export default Searchbar;
