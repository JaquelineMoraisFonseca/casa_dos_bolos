import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Confeiteira from "../../../assets/img/confeiteira.png";
import Personagemum from "../../../assets/img/personagemum.jpg";
import Personagemdois from "../../../assets/img/personagemdois.jpg";
import Personagemtres from "../../../assets/img/personagemtres.jpg";
import StarIcon from '@mui/icons-material/Star';

const StyledInicio = styled("div")(({ theme }) => ({
  backgroundColor: "#F5DDDF",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  paddingTop: "150px",
  [theme.breakpoints.up("sm")]: {
    paddingTop: "250px",
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "5px",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "none",
    width: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "75%",
  },
}));

const TestimonialCard = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  flexDirection: "column", 
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row", 
  },
}));

const Avatar = styled("img")(({theme}) => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  marginRight: "15px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px", 
    marginRight: "0", 
  },
}));

const TestimonialContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    alignItems: "flex-start",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#444",
  display: "flex",
  flexDirection: "column", 
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

const estrelas = Array(5).fill(null);

const Avaliacao = () => {
  return (
    <StyledInicio>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box position="relative" display="flex" justifyContent="center">
              <StyledImg src={Confeiteira} />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              <Typography fontSize="1.2rem" color="#FF6347" fontWeight="700">
                Depoimentos
              </Typography>
              <Typography variant="h4" component="h1" fontWeight={700}>
                O que os nossos clientes falam sobre nós 
              </Typography>
              <Box paddingTop="30px">
                <TestimonialCard>
                  <Avatar src={Personagemum} />
                  <TestimonialContent>
                    <StyledTypography variant="h6">
                      Maria Oliveira
                      <Box display="flex" flexDirection="row">
                        {estrelas.map((_, index) => (
                          <StarIcon key={index} style={{ color: "#b08f2a" }} />
                        ))}
                      </Box>
                    </StyledTypography>
                    <StyledTypography variant="body2">
                      Sou apaixonada pelos bolos que vocês fazem. Sempre frescos, bem decorados e deliciosos. É o lugar perfeito para encomendar doces para qualquer ocasião.
                    </StyledTypography>
                  </TestimonialContent>
                </TestimonialCard>
                <TestimonialCard>
                  <Avatar src={Personagemdois} />
                  <TestimonialContent>
                    <StyledTypography variant="h6">
                      Ana Costa
                      <Box display="flex" flexDirection="row">
                        {estrelas.map((_, index) => (
                          <StarIcon key={index} style={{ color: "#b08f2a" }} />
                        ))}
                      </Box>
                    </StyledTypography>
                    <StyledTypography variant="body2">
                      A qualidade dos produtos e o cuidado no preparo são evidentes em cada mordida. Cada vez que visito, saio com um sorriso no rosto. Parabéns pelo excelente trabalho!
                    </StyledTypography>
                  </TestimonialContent>
                </TestimonialCard>
                <TestimonialCard>
                  <Avatar src={Personagemtres} />
                  <TestimonialContent>
                    <StyledTypography variant="h6">
                      João Silva
                      <Box display="flex" flexDirection="row">
                        {estrelas.map((_, index) => (
                          <StarIcon key={index} style={{ color: "#b08f2a" }} />
                        ))}
                      </Box>
                    </StyledTypography>
                    <StyledTypography variant="body2">
                      As sobremesas da sua confeitaria são simplesmente divinas! A combinação de sabores é única, e o atendimento sempre impecável. Recomendo a todos!
                    </StyledTypography>
                  </TestimonialContent>
                </TestimonialCard>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledInicio>
  );
};

export default Avaliacao;
