import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

const API_URL = 'https://ih-beers-api2.herokuapp.com';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tips, setBrewers_tips] = useState('');
  const [attenuation_level, setAttenuation_level] = useState('');
  const [contributed_by, setContributed_by] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const requestBody = {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      };

      await axios.post(`${API_URL}/beers/new`, requestBody);
      navigate('/beers');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <form method="post" onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          id="tagline"
          label="Tagline"
          variant="outlined"
          type="text"
          name="tagline"
          value={tagline}
          onChange={e => setTagline(e.target.value)}
        />

        <TextField
          id="description"
          label="Description"
          variant="outlined"
          multiline
          cols="30"
          rows="10"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <TextField
          id="first_brewed"
          label="First Brewed"
          variant="outlined"
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={e => setFirst_brewed(e.target.value)}
        />

        <TextField
          id="brewers_tips"
          label="Brewer's tips"
          variant="outlined"
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={e => setBrewers_tips(e.target.value)}
        />

        <TextField
          id="attenuation_level"
          label="Attenuation Level"
          variant="outlined"
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={e => setAttenuation_level(e.target.value)}
        />

        <TextField
          id="contributed_by"
          label="Contributed By"
          variant="outlined"
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={e => setContributed_by(e.target.value)}
        />

        <Button variant="contained" type="submit">
          Add Beer
        </Button>
      </form>
    </main>
  );
}

export default AddBeerPage;
