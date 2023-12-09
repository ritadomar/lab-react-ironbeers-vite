import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://ih-beers-api2.herokuapp.com';

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  const getRandomBeer = async () => {
    try {
      const response = await axios.get(`${API_URL}/beers/random`);
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomBeer();
  }, []);

  return (
    <main>
      {randomBeer && (
        <>
          <img src={randomBeer.image_url} alt={`${randomBeer.name}'s photo`} />
          <div>
            <h1>{randomBeer.name}</h1>
            <p>{randomBeer.attenuation_level}</p>
          </div>
          <div>
            <h2>{randomBeer.tagline}</h2>
            <p>{randomBeer.first_brewed}</p>
          </div>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </>
      )}
    </main>
  );
}

export default RandomBeerPage;
