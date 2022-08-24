import React from "react";
import { Row } from "antd";
import AppLayout from "../../components/Layout";
import GetProducts from "../../features/products/GetProducts";
function Home() {
  return (
    <AppLayout>
      <Row>
        <GetProducts />
      </Row>
    </AppLayout>
  );
}

export default Home;
