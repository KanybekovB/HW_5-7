// BasketPage.jsx
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket, addToBasket, deleteProduct } from "../store/productsSlice";

export const BasketPage = () => {
  const basketProducts = useSelector((state) => state.products.basketProducts);
  const dispatch = useDispatch();
  
  return (
    <div>
      {basketProducts.map((product) => (
        <div className="product" key={product._id}>
          <img src={product.picture} alt={product._id} />
          <div className="productInfo">
            <p className="productName">{product.name}</p>
            <p>{product.description}</p>
            <span>{product.price} </span>
            <button onClick={() => dispatch(removeFromBasket(product))}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => dispatch(addToBasket(product))}>+</button>
            <button onClick={() => dispatch(deleteProduct(product))}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
