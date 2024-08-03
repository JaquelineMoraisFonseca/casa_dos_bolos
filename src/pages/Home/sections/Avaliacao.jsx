import { useEffect } from 'react';
import WebFont from "webfontloader";
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Confeiteira from "../../../assets/img/confeiteirafundo.png";
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
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  alignItems: "lefth",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
  [theme.breakpoints.up("md")]: {
    width: "75%",
  },
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Dancing Script', cursive",
  fontSize: "5rem !important", // Aumente o tamanho conforme necessário
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
}));

const HighlightTypography = styled("span")(() => ({
  color: "#FF6347",
}));

const Avaliacao = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Dancing Script:400,700"],
      },
    });
  }, []);

  return (
    <StyledInicio>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
            <Box position="relative" display="flex" justifyContent="flex-end">
              <StyledImg src={Confeiteira} />
            </Box>
          </Grid>
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
              <Box pt="50px">
                    <StyledButton>
                        Fazer pedido
                    </StyledButton>
                    <StyledButton>
                        (99)999999999
                    </StyledButton>
              </Box>
            </Box>
          </Grid>
          
        </Grid>
      </Container>
    </StyledInicio>
  );
};

export default Avaliacao;