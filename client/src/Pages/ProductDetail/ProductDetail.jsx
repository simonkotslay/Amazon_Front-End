import React, { useEffect, useState } from 'react';
import classes from './ProductDetail.module.css'
import Layout from '../../Components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';

const ProductDetail = () => {
    const [product, setProduct] = useState({})    
    const [isLoading, setIsLoading] = useState(false)
    const {productId} = useParams()
    useEffect(()=>{
        setIsLoading(true)
        axios.get(`{productUrl}/products/${productId}`)
        .then((res)=>{
            setProduct(res.data)
            setIsLoading(false)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <Layout>
            <ProductCard product={product} />
            {setIsLoading? (<Loader/>):(           <ProductCard product={product} 
            flex={true}
            renderDesc={true}
        />)}
        </Layout>
    );
}

export default ProductDetail;
