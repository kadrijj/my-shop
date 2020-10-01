import React from "react";
import { NavLink } from 'react-router-dom';
import SideBar from "./Sidebar";

const Navbar = () => {
    return (
        <div>
            <ul>
                <div className="navlinks">
                    <div className="title"><b>Chido</b></div>
                    <li><NavLink activeClassName='active' exact to='/'>HOME</NavLink></li>
                    <li><NavLink activeClassName='active' to='/shop'>SHOP</NavLink></li>
                    <li><NavLink activeClassName='active' to='/contact'>CONTACT US</NavLink></li>
                </div>
            </ul>
            <div className="mobile-navbar">
                <h1>Chido</h1>
                <SideBar className="sidebar" pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </div>
        </div>
    )
}


export default Navbar;