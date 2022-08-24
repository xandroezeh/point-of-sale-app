import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  DollarOutlined,
  LogoutOutlined,
  WindowsOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./layout.css";

const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const cartqty = cartItems.reduce(function (acc, obj) {
    return acc + obj.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="logo-title">POS</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Home </Link>
          </Menu.Item>
          <Menu.Item key="/products" icon={<WindowsOutlined />}>
            <Link to="/products">Products </Link>
          </Menu.Item>
          <Menu.Item key="/bills" icon={<DollarOutlined />}>
            <Link to="/bills">Bills </Link>
          </Menu.Item>
          <Menu.Item key="/customers" icon={<UsergroupAddOutlined />}>
            <Link to="/customers">Customers </Link>
          </Menu.Item>
          <Menu.Item key="/logout" icon={<LogoutOutlined />}>
            <Link to="/logout">Logout </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}

          <div className="cart-items" onClick={() => navigate("/cart")}>
            <ShoppingCartOutlined />
            <span className="cart-badge">{cartqty}</span>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
