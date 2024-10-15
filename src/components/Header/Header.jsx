import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import Logo from '../../assets/logo.png'; // Logonuzun doğru yolu

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-container');
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header-container">
      <div className="container">
        <nav className="navbar navbar-expand-xl ">
          <div className="col-6">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img
                src={Logo}
                alt="Logo"
                className="d-inline-block align-top logo-image"
              />
            </a>
          </div>

          <div className="col-6 d-flex justify-content-end align-items-center">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              className="d-xl-none"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon style={{ color: 'white' }} />
            </IconButton>

            <div
              className="collapse navbar-collapse d-none d-xl-flex"
              id="navbarNav"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#explore">
                    KEŞFET
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#community">
                    TOPLULUK
                  </a>
                </li>
                <Button
                  variant="outlined"
                  className="start-button"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    borderRadius: '20px',
                    padding: '5px 15px',
                    '&:hover': {
                      backgroundColor: '#f50057',
                      color: 'white',
                      borderColor: '#f50057',
                    },
                  }}
                >
                  START A PROJECT
                </Button>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <div className="drawer-header">
          <img src={Logo} alt="Logo" className="drawer-logo" />
        </div>
        <div className="drawer-menu">
          <List>
            <ListItem
              button
              component="a"
              href="#explore"
              className="menu-text"
            >
              <ListItemText primary="KEŞFET" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="#community"
              className="menu-text"
            >
              <ListItemText primary="TOPLULUK" />
            </ListItem>
            <ListItem>
              <Button
                variant="outlined"
                className="start-button"
                sx={{
                  color: '#f50057',
                  borderColor: '#f50057',
                  borderRadius: '20px',
                  padding: '5px 15px',
                  '&:hover': {
                    backgroundColor: '#f50057',
                    color: 'white',
                    borderColor: '#f50057',
                  },
                }}
              >
                START A PROJECT
              </Button>
            </ListItem>
          </List>
        </div>
        <div className="menu-footer">© Bidabi</div>
      </Drawer>
    </header>
  );
}

export default Header;
