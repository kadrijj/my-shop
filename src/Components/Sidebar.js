import React from "react";
import { slide as Menu } from "react-burger-menu";

const Sidebar = (props) => {


    return (
        <Menu right {...props} >
            <a className="menu-item" href="/">
                Home
          </a>

            <a className="menu-item" href="/shop">
                Shop
          </a>

            <a className="menu-item" href="/contact">
                Contact Us
          </a>
        </Menu>

    );
};

export default Sidebar;