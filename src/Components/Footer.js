import React from "react";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <ul className="footer">
            <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
            <li><NavLink activeClassName='active' to='/shop'>Shop</NavLink></li>
            <li><NavLink activeClassName='active' to='/contact'>Contact Us</NavLink></li>
        </ul>
    )

}
export default Footer;