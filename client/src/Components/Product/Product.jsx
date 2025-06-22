import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import classes from './Product.module.css'
import { productUrl } from '../../Api/EndPoints';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios.get(`${productUrl}/products`)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, []);

  return (
    <>{
      isLoading?(<Loader/>): (
    <section className={classes.products_container}>
      {products?.map((singleProduct) => (
        <ProductCard key={singleProduct.id} {...singleProduct} />
      ))}
    </section>)
    }
    </>
  );
};

export default Product;
