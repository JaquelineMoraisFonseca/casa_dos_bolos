
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, IconButton, Button, Box, Typography, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem } from '../components/cartSlice';

const StyledCart = styled(Box)(({ theme }) => ({
  width: 250,
  padding: 20,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
}));

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleCheckout = () => {
    alert('Pedido finalizado!');
  };

  return (
    <StyledCart>
      <Typography variant="h6" gutterBottom>
        Carrinho de Compras
      </Typography>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={item.price} />
            <IconButton edge="end" aria-label="delete" onClick={() => handleRemove(item.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      {items.length > 0 && (
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={handleCheckout}>
            Finalizar Pedido
          </Button>
        </Box>
      )}
    </StyledCart>
  );
};

export default Cart;
