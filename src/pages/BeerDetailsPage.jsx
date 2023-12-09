import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://ih-beers-api2.herokuapp.com';

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);

  const { beerId } = useParams();

  const getSingleBeer = async () => {
    try {
      const response = await axios.get(`${API_URL}/beers/${beerId}`);
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBeer();
  }, []);

  return (
    <main>
      {beer && (
        <>
          <img src={beer.image_url} alt={`${beer.name}'s photo`} />
          <div>
            <h1>{beer.name}</h1>
            <p>{beer.attenuation_level}</p>
          </div>
          <div>
            <h2>{beer.tagline}</h2>
            <p>{beer.first_brewed}</p>
          </div>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </>
      )}
    </main>
  );
}

export default BeerDetailsPage;
