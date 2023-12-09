import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://ih-beers-api2.herokuapp.com';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tips, setBrewers_tips] = useState('');
  const [attenuation_level, setAttenuation_level] = useState(0);
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          value={tagline}
          onChange={e => setTagline(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <label htmlFor="first_brewed">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          value={first_brewed}
          onChange={e => setFirst_brewed(e.target.value)}
        />

        <label htmlFor="brewers_tips">Brewer's Tips</label>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          value={brewers_tips}
          onChange={e => setBrewers_tips(e.target.value)}
        />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          value={attenuation_level}
          onChange={e => setAttenuation_level(e.target.value)}
        />

        <label htmlFor="contributed_by">Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={contributed_by}
          onChange={e => setContributed_by(e.target.value)}
        />

        <button type="submit">Add Beer</button>
      </form>
    </main>
  );
}

export default AddBeerPage;
