import { useState } from 'react';
import { AppBar, MenuItem, Toolbar, styled, useMediaQuery, useTheme, Box, IconButton, Drawer, Badge } from '@mui/material';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import Cart from '../Cart';
import "./HamburguerMenu.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    fontWeight: "700 !important",
    color: "#ebb9be"
  }));

  const StyledBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: 'center',
    gap: '200px',
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      gap:"100px",
    },
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
            <StyledBox>
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
            </StyledBox>
            <IconButton color="inherit" onClick={toggleCart(true)} sx={{ marginLeft: 'auto' }}>
              <Badge badgeContent={cartItems.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </>
        )}
        {isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', gap: '10px' }}>
            <IconButton color="inherit" onClick={toggleCart(true)}>
              <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </StyledToolbar>
      {isMobile && (
        <Menu right isOpen={isMenuOpen} onStateChange={handleMenuStateChange} customBurgerIcon={false}>
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
      )}
      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart(false)}>
        <Cart />
      </Drawer>
    </AppBar>
  );
};

export default NavBar;



