import { useEffect, useState } from 'react';
import WebFont from "webfontloader";
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Bolo from "../../../assets/img/fotobolo.png";
import StyledButton from '../../../components/StyledButton';

const StyledInicio = styled("div")(({ theme }) => ({
  backgroundColor: "#F5DDDF",
  height: "auto",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  paddingTop: "150px",
  
  [theme.breakpoints.up("xs")]: {
    paddingTop: "150px",
  },
  [theme.breakpoints.up("sm")]: {
    paddingTop: "250px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0",
  },
  [theme.breakpoints.down("md")]: {
    textAlign:"center",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  alignItems: "right",

  [theme.breakpoints.down("md")]: {
    display: "none",
    width: "50%",

  },
  [theme.breakpoints.up("lg")]: {
    width: "75%",
  },
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Dancing Script', cursive",
  fontSize: "5rem !important",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
}));

const HighlightTypography = styled("span")(() => ({
  color: "#FF6347",
  fontWeight: 700,
}));

const BotaoContainer = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "10px",
  paddingTop:"30px",
  
  [theme.breakpoints.up("xs")]: {
   marginLeft:"50px",
  },
  
}));

const Inicio = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Dancing Script:400,700"],
      },
    });
  }, []);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("(99)999999999");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <StyledInicio>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box>
              <CustomTypography variant="h4" component="h1">
                Casa dos Bolos
              </CustomTypography>
              <Typography variant="h6" component="h2" fontSize="2.5rem !important" pt="50px">
                O sabor que vai até <HighlightTypography>você</HighlightTypography>
              </Typography>
              <Typography variant="body1" component="p" mt="20px" fontSize="1.25rem">
                Somos uma confeitaria especializada em bolos deliciosos e fazemos entregas diretamente para sua casa.
              </Typography>
              <BotaoContainer>
                <StyledButton>
                  Fazer pedido
                </StyledButton>
                <StyledButton onClick={handleCopyNumber}>
                  (99)999999999
                </StyledButton>
                {copied && <Typography variant="body2" color="success" >Número copiado!</Typography>}
              </BotaoContainer>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box position="relative" display="flex" justifyContent="flex-end">
              <StyledImg src={Bolo} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledInicio>
  );
};

export default Inicio;







