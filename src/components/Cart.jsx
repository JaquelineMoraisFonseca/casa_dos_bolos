
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeItem } from '../components/cartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div style={{ width: 250, padding: 20 }}>
      <h2>Carrinho de Compras</h2>
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
    </div>
  );
};

export default Cart;

