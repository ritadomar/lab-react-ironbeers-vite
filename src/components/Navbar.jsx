import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function Navbar() {
  return (
    // style to be replaced
    <>
      <nav>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar>
              <Link to="/" className="NavIcon">
                <IconButton
                  size="large"
                  edge="start"
                  color="default"
                  aria-label="menu"
                  // sx={{ mr: 2 }}
                >
                  <HomeRoundedIcon />
                </IconButton>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
    </>
  );
}

export default Navbar;
