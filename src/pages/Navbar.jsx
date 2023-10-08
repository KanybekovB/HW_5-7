import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const basketProducts = useSelector((state) => state.products.basketProducts);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home page</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to='/create-post'>Create Post</NavLink>
          </li>
        </ul>
        <NavLink to="/basket">
          <span>Корзина {basketProducts.length}</span>
        </NavLink>
      </nav>
    </header>
  );
};
