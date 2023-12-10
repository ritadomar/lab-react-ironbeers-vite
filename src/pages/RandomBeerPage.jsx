import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Container } from '@mui/material';

const API_URL = 'https://ih-beers-api2.herokuapp.com';

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  const getRandomBeer = async () => {
    try {
      const response = await axios.get(`${API_URL}/beers/random`);
      setRandomBeer(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomBeer();
  }, []);

  return (
    <main className="beer-display">
      {randomBeer && (
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={randomBeer.image_url}
            alt={`${randomBeer.name}'s photo`}
            style={{ width: 100 }}
          />
          <Box>
            <div className="horizontal">
              <Typography variant="h1">{randomBeer.name}</Typography>
              <Typography variant="h3" color="text.secondary">
                {randomBeer.attenuation_level}
              </Typography>
            </div>
            <div className="horizontal">
              <Typography variant="h2">{randomBeer.tagline}</Typography>
              <Typography variant="body2">{randomBeer.first_brewed}</Typography>
            </div>
            <Typography variant="body1">{randomBeer.description}</Typography>
            <Typography variant="caption">
              {randomBeer.contributed_by}
            </Typography>
          </Box>
        </Container>
      )}
    </main>
  );
}

export default RandomBeerPage;
