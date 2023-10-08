//products page

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productsSlice';
import { addToBasket } from '../store/productsSlice'


export const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const handleBuyClick = (product) => {
    dispatch(addToBasket(product));
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className='productsBlock'>
        {products.map(product => (
          <div className='product' key={product._id}>
            <img src={product.picture} alt={product._id} />
            <div className='productInfo'>
              <p className='productName'>{product.name}</p>
              <p>{product.description}</p>
              <span>{product.price} </span>
              <button onClick={() => handleBuyClick(product)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
