import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../api/api";
import { Card, Button, Col } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { addToCart } from "../cart/cartSlice";

export const GetProducts = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  const productsStatus = useSelector((state) => state.products.status);

  const error = useSelector((state) => state.products.error);

  // const  {cartItems}  = useSelector(state => state.cart);

  const handlerToCart = (product) => {
    dispatch(
      addToCart({
        productId: product._id,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
  };
  // console.log(cartItems[0].productId);

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(getProducts({}));
    }
  }, [productsStatus, dispatch]);

  const { Meta } = Card;

  if (productsStatus === "loading") {
    return <SyncOutlined spin />;
  } else if (productsStatus === "succeeded") {
    return products.map((product) => (
      <Col xs={24} sm={6} md={12} lg={6} key={product._id}>
        <Card
          hoverable
          style={{ width: 240, marginBottom: 30 }}
          cover={
            <img
              alt={product.name}
              src={product.image}
              width={240}
              height={240}
            />
          }
        >
          <Meta
            title={product.name}
            description={`₦${product.price}`}
            style={{ height: 90 }}
          />
          <div className="product-btn">
            <Button onClick={() => handlerToCart(product)}>Add To Cart</Button>
          </div>
        </Card>
      </Col>
    ));
  } else if (productsStatus === "failed") {
    return <div>{error}</div>;
  }
};

export default GetProducts;
