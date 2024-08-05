import React, { useState } from 'react';
import { AppBar, MenuItem, Toolbar, styled, useMediaQuery, useTheme, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./HamburguerMenu.css";
import Cart from '../Cart'; // Certifique-se de criar este componente

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "center",
    gap: "48px",
    alignItems: "center",
    width: "100%",
    fontWeight: "700 !important",
    color: "#ebb9be"
  }));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleCart = (open) => () => {
    setIsCartOpen(open);
  };

  return (
    <AppBar position='fixed'>
      <StyledToolbar>
        {!isMobile && (
          <>
            <MenuItem>
              <Link to="inicio" smooth={true} duration={500}>
                Início
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="cardapio" smooth={true} duration={500}>
                Cardápio
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="avaliacoes" smooth={true} duration={500}>
                Avaliações
              </Link>
            </MenuItem>
            <IconButton color="inherit" onClick={toggleCart(true)}>
              <ShoppingCartIcon />
            </IconButton>
          </>
        )}
        {isMobile && (
          <Box sx={{ marginLeft: "auto" }}>
            <Menu right isOpen={isMenuOpen} onStateChange={handleMenuStateChange} onClick={closeMenu}>
              <Link className="menu-item" to="inicio" smooth={true} duration={500} onClick={closeMenu}>
                Início
              </Link>
              <Link className="menu-item" to="cardapio" smooth={true} duration={500} onClick={closeMenu}>
                Cardápio
              </Link>
              <Link className="menu-item" to="avaliacoes" smooth={true} duration={500} onClick={closeMenu}>
                Avaliações
              </Link>
            </Menu>
            <IconButton color="inherit" onClick={toggleCart(true)}>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        )}
      </StyledToolbar>
      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart(false)}>
        <Cart />
      </Drawer>
    </AppBar>
  );
};

export default NavBar;

