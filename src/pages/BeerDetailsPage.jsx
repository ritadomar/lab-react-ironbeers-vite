import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Typography } from '@mui/material';

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
    <main className="beer-display">
      {beer && (
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={beer.image_url}
            alt={`${beer.name}'s photo`}
            style={{ width: 100 }}
          />
          <Box>
            <div className="horizontal">
              <Typography variant="h1">{beer.name}</Typography>
              <Typography variant="h3" color="text.secondary">
                {beer.attenuation_level}
              </Typography>
            </div>
            <div className="horizontal">
              <Typography variant="h2">{beer.tagline}</Typography>
              <Typography variant="body2">{beer.first_brewed}</Typography>
            </div>
            <Typography variant="body1">{beer.description}</Typography>
            <Typography variant="caption">{beer.contributed_by}</Typography>
          </Box>
        </Container>
      )}
    </main>
  );
}

export default BeerDetailsPage;
