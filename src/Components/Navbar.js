import React from "react";
import { NavLink } from 'react-router-dom';
import SideBar from "./Sidebar";

const Navbar = () => {
    return (
        <>
            <ul>
                <div className="navlinks">
                    <div className="title">Chido</div>
                    <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName='active' to='/shop'>Shop</NavLink></li>
                    <li><NavLink activeClassName='active' to='/contact'>Contact Us</NavLink></li>
                </div>
            </ul>
            <div className="mobile-navbar">
                <h1>Chido</h1>
                <SideBar className="sidebar" pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </div>
        </>
    )
}


export default Navbar;