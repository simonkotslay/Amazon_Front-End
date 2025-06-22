import React from 'react';
import Layout from '../../Components/Layout/Layout';
import { Carousel } from 'react-responsive-carousel';
import Product from '../../Components/Product/Product'
import Category from '../../Components/Category/Category'
import CarouselEffect from '../../Components/Carousel/CarouselEffect';

const Landing = () => {
    return (
        <Layout>
            <CarouselEffect/>
            <Category/>
            <Product/>
        </Layout>
    );
}

export default Landing;
