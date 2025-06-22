import React, { useContext } from 'react';
import classes from './Cart.module.css'
import { DataContext } from '../../Components/DataProvider/DataProvider';
import Layout from '../../Components/Layout/Layout';
import ProductCard from '../../Components/Product/ProductCard';


const Cart = () => {
    const [{basket, user}, dispatch] = useContext(DataContext)





    return (
        <Layout>
            <section>
                <div>
                    <h2>Hello</h2>
                    <h3>Your shopping basket</h3>
                    <hr />
                    {
                    basket?.length==0?(<p>Opps ! No item in your cart</p>):(basket?.map((item)=>{
                        return <ProductCard 
                        key={i}
                        product={item}
                        renderDesc={true}
                        flex={true}
                        />
                    })
                    )
                    }
                </div>
    {/* ************************** */}
                <div>

                </div>
            </section>
        </Layout>
    );
}

export default Cart;
