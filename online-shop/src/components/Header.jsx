import React from "react";
import {NavLink} from "react-router-dom"
import "../style.css" 

export default function Header(){
    return(
        <header id="header">
        <NavLink to="/products">
            <img className="sitelogo" src="https://mpng.subpng.com/20180519/rya/kisspng-logo-phoenix-art-5afffc96998f80.692522331526725782629.jpg" alt="" />
        </NavLink>
        <form className="search">
            <input type="text" placeholder="search" />
            <button>Accept</button>
        </form>
        <div className="cartLink">
            <img src="https://www.pngitem.com/pimgs/m/248-2488288_transparent-shopping-centre-clipart-transparent-background-shopping-cart.png" alt="" />
            <NavLink to="/cart"></NavLink>
            <span>0</span>
        
        </div>
        
                </header>
    )

}