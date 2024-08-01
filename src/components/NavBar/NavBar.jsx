import { AppBar, MenuItem, Toolbar, styled, useMediaQuery, useTheme, Box } from '@mui/material';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import { useState } from 'react';
import "./HamburguerMenu.css";



const NavBar = () => {

const[isMenuOpen, setIsMenuOpen] = useState(false)

    const StyledToolbar = styled(Toolbar) (() =>({
        display:"flex",
        justifyContent:"center",
        gap:"48px",
        alignItems:"center",
        width:"100%",
        fontWeight: 700,
        color:"#562802 "

    }))

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleMenuStateChange = (state) =>{
        setIsMenuOpen(state.isOpen);
    }

    const closeMenu = () =>{
        setIsMenuOpen(false);
    }


    return(
        <AppBar position='absolute'> 
            <StyledToolbar>
                {! isMobile &&(
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
                    </>
                
                )}
                {isMobile && (
                    <Box sx={{marginLeft:"auto"}}>
                        <Menu right isOpen={isMenuOpen} onStateChange={handleMenuStateChange} onClik={closeMenu}>
                            <Link className="menu-item" to="inicio" smooth={true} duration={500} onClik={closeMenu}>
                                Início
                            </Link>
                            <Link className="menu-item" to="cardapio" smooth={true} duration={500} onClick={closeMenu}>
                                Cardápio
                            </Link>
                            <Link className="menu-item" to="avaliacoes" smooth={true} duration={500} onClick={closeMenu}>
                                Avaliações
                            </Link>
                        </Menu>
                    </Box>
                )}
            </StyledToolbar>
                
        </AppBar>
    )
}
export default NavBar