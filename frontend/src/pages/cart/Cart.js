import React from 'react';
import { MinusCircleOutlined, PlusCircleOutlined, DeleteOutlined, } from '@ant-design/icons';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import AppLayout from '../../components/Layout';
import {addToCart, subFromCart, delFromCart} from '../../features/cart/cartSlice'


function Cart() {
    const { cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleAdd = (record) => {
        dispatch(addToCart({
            productId: record.productId,
            name: record.name,
            category: record.category,
            price: record.price,
            image: record.image,
            quantity: 1,
        }));
    }

    const handleMinus = (record) => {
        dispatch(subFromCart({
            productId: record.productId,
            name: record.name,
            category: record.category,
            price: record.price,
            image: record.image,
            quantity: 1,
        }));
    }
    const handleDelete = (record) => {
        dispatch(delFromCart({
            productId: record.productId,
        }))
    }

  const columns = [
    {
        title: "Product",
        dataIndex: "name"
    },
    {
        title: "Image",
        dataIndex: "image",
        render: (image, record) => <img src={image} alt={record.name} height={60} width={60} />
    },
    {
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "Quantity",
        dataIndex: "productId",
        render:(productId, record) => 
            <div>
                <MinusCircleOutlined className='cart-minus' onClick={() => handleMinus(record)}/>
                <strong className='cart-quantity'>{record.quantity}</strong>
                <PlusCircleOutlined className='cart-plus' onClick={() => handleAdd(record)} />
            </div>
    }
    , 
    {
        title: "Action",
        dataIndex: "productId",
        render:(productId, record) => <DeleteOutlined className='cart-action' onClick={() => handleDelete(record)} />
    }

  ]
  return (
    <AppLayout>
      <Table rowKey={record => record.productId} dataSource={cartItems} columns={columns} />;
    </AppLayout>
  )
}

export default Cart