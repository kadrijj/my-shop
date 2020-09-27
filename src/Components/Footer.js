import React from "react";
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <ul className="footer">
            <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
            <li><NavLink activeClassName='active' to='/shop'>Shop</NavLink></li>
            <li><NavLink activeClassName='active' to='/contact'>Contact Us</NavLink></li>
            <li className="social-icon"><SocialIcon url="https://www.instagram.com/jkadrij/" /></li>
        </ul>
    )

}
export default Footer;