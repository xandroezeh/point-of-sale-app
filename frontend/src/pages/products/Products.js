import React from 'react';
import AppLayout from '../../components/Layout';
import GetProducts from '../../features/products/GetProducts';

function Products() {
  return (
    <AppLayout> 
      <GetProducts/>
    </AppLayout>
  )
}

export default Products