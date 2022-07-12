import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../api/api';

export const GetProducts = () => {
  
  const dispatch = useDispatch();

  const products = useSelector(state => state.products.products);

  const productsStatus = useSelector(state => state.products.status);

  const error = useSelector(state => state.products.error);

  useEffect(() => {
    if(productsStatus === "idle") {
      dispatch(getProducts());
    }
  }, [productsStatus, dispatch])

  return (
    <div>GetProducts</div>
  )
}

export default GetProducts