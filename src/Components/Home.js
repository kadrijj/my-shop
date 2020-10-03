import React from "react";
import Blog from "./Blog";
import ContactFrenchie from "./ContactFrenchie";
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>
                <div className="main-content">
                    <div className="blog-text">
                        <h1>Welcome to Chido</h1>
                        <p>Are you looking for a fun statement T-shirt? Check out our shop! If you have something on your mind that you would like to wear on a t-shirt, but you didn´t see it in our selection: let us know - we can create this for you! I hope you enjoy Chido as much as we do!</p>
                    </div>
                    <ContactFrenchie />
                    <NavLink to='/shop'>
                        <button className="shop-button">TO SHOP</button></NavLink>
                    <Blog />
                </div>
            </div>
        </>)
}


export default Home;