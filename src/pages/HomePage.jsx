import { Link } from 'react-router-dom';
import BeersImage from '../assets/beers.png';
import RandomBeersImage from '../assets/random-beer.png';
import NewBeerImage from '../assets/random-beer.png';

function HomePage() {
  return (
    <main>
      <Link to="/beers">
        <article>
          <img src={BeersImage} alt="Picture of beers" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            dolor doloremque ipsum, enim similique aspernatur accusamus!
          </p>
        </article>
      </Link>
      <Link to="/random-beer">
        <article>
          <img src={RandomBeersImage} alt="Picture of random beers" />
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            dolor doloremque ipsum, enim similique aspernatur accusamus!
          </p>
        </article>
      </Link>
      <Link to="/new-beer">
        <article>
          <img src={NewBeerImage} alt="Picture of new beer" />
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            dolor doloremque ipsum, enim similique aspernatur accusamus!
          </p>
        </article>
      </Link>
    </main>
  );
}

export default HomePage;
