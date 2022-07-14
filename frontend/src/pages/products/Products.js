import React, { useState, useEffect } from 'react';
import AppLayout from '../../components/Layout';
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts, getProducts } from '../../api/api';


function Products() {
  const [popModal, setPopModal] = useState(false);
  const [editProduct, setEditProduct] = useState(false);

  const {products} = useSelector(state => state.products);

  const productsStatus = useSelector(state => state.products.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if(productsStatus === "idle") {
      dispatch(getProducts({}));
    }
  }, [productsStatus, dispatch])

  const handlerDelete = (record) => {
    dispatch(deleteProducts({productId: record._id}))
  }
console.log(products);
  const columns = [
    {
        title: "Name",
        dataIndex: "name"
    },
    {
        title: "Image",
        dataIndex: "image",
        render:(image, record) => <img src={image} alt={record.name} height={60} width={60} />
    }, 
    {
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "Action",
        dataIndex: "_id",
        render:(id, record) => 
        <div>
          <DeleteOutlined className='cart-action' onClick={() => handlerDelete(record)}/>
          {/* <EditOutlined className='cart-edit' onClick={() => {setEditProduct(record); setPopModal(true)}} /> */}
        </div>
        
    }
  ]
  return (
    <AppLayout> 
      <Table rowKey={record => record._id} dataSource={products} columns={columns} bordered />
    </AppLayout>
  )
}

export default Products