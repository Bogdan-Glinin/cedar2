import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/images/logo.png"
import lk from "../../assets/images/lk.png"
import basket from "../../assets/images/basket.png"
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return(
        <nav className={classes.header}>
            <div className={classes.logo}>
                <NavLink to="/mainPage"><img src={logo} alt="лого" /></NavLink>
            </div>
            <div className={classes.menu}>
                <div className={classes.lk}>
                    <img src={lk} alt="личный кабинет" />
                </div>
                <div className={classes.basket}>
                    <img src={basket} alt="корзина" />
                </div>
            </div>
        </nav>
    )
}

export default Header;