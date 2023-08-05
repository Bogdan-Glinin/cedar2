import React from "react";
import classes from "./MainPage.module.css";
import { NavLink } from "react-router-dom";


const MainPage = () => {
    return (
        <div className={classes.mainPage}>
            <div className={classes.title}>
                Салон посуды и декора интерьера
            </div>
            <div className={classes.subtitleInfo}>
                Мы собрали с особой любовью всё для Вашего дома: от лиможского фарфора из Франции до невесомых чайных пар Императорского фарфорового завода
            </div>
            <NavLink to="/Catalog"  style={{ textDecoration: 'none' }}>
                <div className={classes.CatalogLink}>
                    Перейти в каталог
                </div>
            </NavLink>
            <div className={classes.hits}>
                Хиты
            </div>
            
        </div>
    )
}

export default MainPage;