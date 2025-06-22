import React, { useContext } from 'react';
import { Rating } from '@mui/material';
import CurrentFormat from '../CurrentFormat/CurrentFormat';
import classes from './Product.module.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';



const ProductCard = (products, flex,renderDesc, renderAdd) => {
  const { image, title, rating, price, description } = products

  const [state,dispatch] = useContext(DataContext)

  const addToCart = () =>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item:{
        image, title, rating, price, description
      }
    })
  }





  return (
    <div className={`${classes.card_container} ${flex?classes.product_flexed : ''}`}>
      <Link to={`/products/${products.id}`}>
        <img src={image || ''} alt={title || 'product image'} />
      </Link>
      <div>
        <h3>{title}</h3>
        renderDesc && <div style={{maxWidth:"500px"}}>{description}</div>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate ?? 0} precision={0.1} readOnly />
          {/* count */}
          <small>{rating?.count ?? 0}</small>
        </div>
        <div>
          {/* price */}
          <CurrentFormat amount={price} />
        </div>
        <button className={classes.button} onClick={addToCart}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
