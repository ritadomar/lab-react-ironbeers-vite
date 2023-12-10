import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Searchbar from '../components/Searchbar';
import BeerCard from '../components/BeerCard';

const API_URL = 'https://ih-beers-api2.herokuapp.com';

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  const getBeers = async () => {
    try {
      const response = await axios.get(`${API_URL}/beers`);

      setAllBeers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <main>
      <Searchbar setAllBeers={setAllBeers} />
      <ul>
        {allBeers.map(beer => (
          <Link key={beer._id} to={`/beers/${beer._id}`} className="clear-link">
            <li style={{ listStyle: 'none' }}>
              <BeerCard
                image={beer.image_url}
                title={beer.name}
                tagline={beer.tagline}
                created={beer.contributed_by}
              />
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default AllBeersPage;
