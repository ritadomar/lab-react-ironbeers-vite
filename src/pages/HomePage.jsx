import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BeersImage from '../assets/beers.png';
import RandomBeersImage from '../assets/random-beer.png';
import NewBeerImage from '../assets/random-beer.png';
import ActionAreaCard from '../components/ActionCard';

function HomePage() {
  return (
    <main>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: 'column', alignContent: 'center' }}
        >
          <Grid item xs={12}>
            <Link to="/beers" className="clear-link">
              <ActionAreaCard
                image={BeersImage}
                title="All Beers"
                sx={{ maxWidth: 500 }}
              />
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/random-beer" className="clear-link">
              <ActionAreaCard
                image={RandomBeersImage}
                title="Random Beer"
                sx={{ maxWidth: 500 }}
              />
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/new-beer" className="clear-link">
              <ActionAreaCard
                image={NewBeerImage}
                title="New Beer"
                sx={{ maxWidth: 500 }}
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}

export default HomePage;
