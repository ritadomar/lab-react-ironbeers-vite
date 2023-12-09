import { Link } from 'react-router-dom';
import NavImage from '../assets/home-icon.png';

function Navbar() {
  return (
    // style to be replaced
    <nav style={{ backgroundColor: 'blue' }}>
      <Link to="/">
        <img src={NavImage} alt="Home Icon" />
      </Link>
    </nav>
  );
}

export default Navbar;
