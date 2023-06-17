import { useSelector } from 'react-redux';
import classes from './cart-button.module.css';

const CartButton = (props) => {

  
  const items= useSelector ((state) => state.cart.cartItems)

  let totalQuantity=0;
  items.forEach((item) =>{
    totalQuantity += item.quantity;
  })

  
  return (
    <button className={classes.button} onClick={props.showCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;