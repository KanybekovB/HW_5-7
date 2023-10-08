import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { Product } from "./pages/Product";
import { BasketPage } from "./pages/BasketPage";
import { PostsPage } from "./pages/Postspage";
import { CreatePostPage } from "./pages/CreatePostPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />}/>
          <Route path="basket" element={<BasketPage />}/>
          <Route path="posts" element={<PostsPage />}/>
          <Route path="create-post" element={<CreatePostPage />}/>
        </Route>
      </Routes>
    </>
  );
}
