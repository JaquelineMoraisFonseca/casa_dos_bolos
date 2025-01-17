
import { Container, Grid, styled, Button } from "@mui/material";
import { Element } from 'react-scroll';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../components/cartSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Boloum from "../../../assets/img/boloum.jpg";
import Bolodois from "../../../assets/img/bolodois.jpg";
import Bolotres from "../../../assets/img/bolotres.jpg";
import Boloquatro from "../../../assets/img/boloquatro.jpg";
import Bolocinco from "../../../assets/img/bolocinco.jpg";
import Boloseis from "../../../assets/img/boloseis.jpg";
import Bolosete from "../../../assets/img/bolosete.jpg";
import Bolooito from "../../../assets/img/bolooito.jpg";

const StyledCardapio = styled("div")(({ theme }) => ({
  backgroundColor: "#F5DDDF",
  height: "auto",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "170px", // Ajuste para incluir o h1
  [theme.breakpoints.up("xs")]: {
    paddingTop: "50px", // Ajuste para incluir o h1
  },
  [theme.breakpoints.up("sm")]: {
    paddingTop: "100px", // Ajuste para incluir o h1
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "70px", // Ajuste para incluir o h1
  },
}));

const StyledBox = styled("div")(() => ({
  backgroundColor: "#f5bfc3",
  textAlign: "center",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "50px",
  overflow: "hidden",
  height: "350px",
  marginBottom:"-30px"
}));

const ImageContainer = styled("div")(({ imageUrl }) => ({
  width: "100%",
  height: "800px",
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const Description = styled("div")(() => ({
  padding: "10px",
  width: "100%",
  height:"30px",
  textAlign: "left",
  paddingLeft: "20px",
}));

const PriceContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 20px",
  marginTop: "5px",
  flexDirection: 'row',
  marginBottom:"10px"
}));

const PriceText = styled("div")(() => ({
  fontSize: "12px",
  color: "#555",
  marginRight: "auto",
}));

const CustomButton = styled(Button)(() => ({
  padding: '6px 12px',
  fontSize: '12px',
  paddingRight:"3px"
}));

const Cardapio = () => {
  const dispatch = useDispatch();

  const pratos = [
    { id: 1, name: "Bolo Chocolate com morangos", imageUrl: Boloum, price: "R$100,00" },
    { id: 2, name: "Bolo de Creme", imageUrl: Bolodois, price: "R$120,00" },
    { id: 3, name: "Bolo Explosão de chocolate", imageUrl: Bolotres, price: "R$80,00" },
    { id: 4, name: "Bolo de Limão", imageUrl: Boloquatro, price: "R$150,00" },
    { id: 5, name: "Bolo de Cenoura", imageUrl: Bolocinco, price: "R$200,00" },
    { id: 6, name: "Bolo Trento", imageUrl: Boloseis, price: "R$90,00" },
    { id: 7, name: "Bolo de Pistache", imageUrl: Bolosete, price: "R$110,00" },
    { id: 8, name: "Brownie recheado", imageUrl: Bolooito, price: "R$130,00" },
  ];

  const handleAddToCart = (prato) => {
    dispatch(addItem(prato));
  };

  return (
    <Element name="cardapio">
      <StyledCardapio>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Cardápio</h1>
        <Container maxWidth="lg">
          <Grid container spacing={3} mb={4}>
            {pratos.map((prato) => (
              <Grid item xs={12} sm={6} md={3} key={prato.id}>
                <StyledBox>
                  <ImageContainer imageUrl={prato.imageUrl} />
                  <Description>
                    <div style={{ fontSize: "14px", fontWeight: "bold" }}>{prato.name}</div>
                  </Description>
                  <PriceContainer>
                    <PriceText>{prato.price}</PriceText>
                    <CustomButton 
                      variant="contained" 
                      color="primary" 
                      size="small" 
                      startIcon={<ShoppingCartIcon />} 
                      onClick={() => handleAddToCart(prato)}
                    >
                      Adicionar
                    </CustomButton>
                  </PriceContainer>
                </StyledBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledCardapio>
    </Element>
  );
};

export default Cardapio;





