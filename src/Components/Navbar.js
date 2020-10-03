import React from "react";
import { NavLink } from 'react-router-dom';
import SideBar from "./Sidebar";

const Navbar = () => {
    return (
        <>
            <div className="sticky">
                <ul>
                    <div className="navlinks">
                        <div className="title"><b>Chido</b></div>
                        <li><NavLink activeClassName='active' exact to='/'>HOME</NavLink></li>
                        <li><NavLink activeClassName='active' to='/shop'>SHOP</NavLink></li>
                        <li><NavLink activeClassName='active' to='/contact'>CONTACT US</NavLink></li>
                    </div>
                </ul>
            </div>
            <div className="mobile-navbar">
                <h1 className="title">Chido</h1>
                <SideBar className="sidebar" pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </div>
        </>
    )
}


export default Navbar;