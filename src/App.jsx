import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import RandomBeersPage from './pages/RandomBeerPage';
import AddBeerPage from './pages/AddBeerPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: '#3dc4fc',
      },
      secondary: {
        main: '#3dc4fc',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        {/* <h1>LAB | React IronBeers</h1> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<AllBeersPage />} />
          <Route path="/random-beer" element={<RandomBeersPage />} />
          <Route path="/new-beer" element={<AddBeerPage />} />
          <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
