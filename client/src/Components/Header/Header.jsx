import React, {useContext } from 'react';
import classes from './Header.module.css'
import {SlLocationPin} from "react-icons/sl"
import {BsSearch} from "react-icons/bs"
import {BiCart} from "react-icons/bi"
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';

const Header = () => {
    const [{basket},dispatch] = useContext(DataContext)
    console.log(basket.length);
    return (
        <section className={classes.fixed}>
            <section>
                <div className={classes.header_container}>
                    <div className={classes.logo_container}>
                        {/* logo */}
                        <Link to="#">
                            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                        </Link>
                            {/* icon */}
                        <div className={classes.delivery}>
                            <span>
                            <SlLocationPin />
                            </span>
                            <div>
                                <p>Delivered to</p>
                                <span>Canada</span>
                            </div>
                        </div>
                    </div>
                    {/* Search */}
                    <div className={classes.search}>
                        <select name="" id="">
                            <option value="">All</option>
                        </select>
                        <input type="text" name='' id='' placeholder='Search Product'/>
                        {/* icon */}
                        <BsSearch size={23}/>
                    </div>
                        {/* Right side link */}
                        <div className={classes.order_container}>
                            <Link to='' className={classes.language}>
                                <img src="http://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="" />
                                <select name='' id=''>
                                    <option value="">EN</option>
                                </select>
                            </Link>
                            {/* Three components */}
                            <Link to="">
                                <p>Sign In</p>
                                <span>Accounts & list</span>
                            </Link>
                            {/* orders */}
                            <Link to="">
                                    <p>Returns</p>
                                    <span>& orders</span>
                            </Link>
                            {/* cart */}
                            <Link to={"/cart"} className={classes.cart}>
                            <BiCart size={35} />
                                <span>{basket.length}</span>
                            </Link>
                        </div>
                </div>
            </section>
        <LowerHeader />
        </section>
    );
}

export default Header;
