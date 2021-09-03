import Product from "../components/Product";
import "./HomeScreen.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts as listProducts } from "../redux/actions/productActions";

import Loading from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="homescreen">
      <h2 className="homescreen_title">Latest Products</h2>
      <div className="homescreen_products">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
