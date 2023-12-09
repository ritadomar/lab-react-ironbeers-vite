import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <section>
      <ul>
        {allBeers.map(beer => (
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <li>
              <img src={beer.image_url} alt={`${beer.name}'s photo`} />
              <div>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default AllBeersPage;
