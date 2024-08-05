
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Confeiteira from "../../../assets/img/confeiteirafundo.png";
import Personagemum from "../../../assets/img/personagemum.jpg";
import Personagemdois from "../../../assets/img/personagemdois.jpg";
import Personagemtres from "../../../assets/img/personagemtres.jpg";

const StyledInicio = styled("div")(({ theme }) => ({
  backgroundColor: "#F5DDDF",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  paddingTop: "150px",
  [theme.breakpoints.up("sm")]: {
    paddingTop: "250px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
  [theme.breakpoints.up("md")]: {
    width: "75%",
  },
}));

const TestimonialCard = styled(Box)(() => ({
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
}));

const Avatar = styled("img")(() => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  marginRight: "15px",
}));

const TestimonialContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledTypography = styled(Typography)(() => ({
  color: "#444",
}));

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
                    <StyledTypography variant="h6">Maria Oliveira</StyledTypography>
                    <StyledTypography variant="body2">
                    Sou apaixonada pelos bolos que vocês fazem. Sempre frescos, bem decorados e deliciosos. É o lugar perfeito para encomendar doces para qualquer ocasião
                    </StyledTypography>
                  </TestimonialContent>
                </TestimonialCard>
                <TestimonialCard>
                  <Avatar src={Personagemdois} />
                  <TestimonialContent>
                    <StyledTypography variant="h6">Ana Costa</StyledTypography>
                    <StyledTypography variant="body2">
                      A qualidade dos produtos e o cuidado no preparo são evidentes em cada mordida. Cada vez que visito, saio com um sorriso no rosto. Parabéns pelo excelente trabalho!
                    </StyledTypography>
                  </TestimonialContent>
                </TestimonialCard>
                <TestimonialCard>
                  <Avatar src={Personagemtres} />
                  <TestimonialContent>
                    <StyledTypography variant="h6">Fulana de Tal</StyledTypography>
                    <StyledTypography variant="body2">
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatibus cumque dolor ea est quae alias necessitatibus"
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
