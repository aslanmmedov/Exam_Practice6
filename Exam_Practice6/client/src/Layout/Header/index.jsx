import React from "react";
import styles from "./index.module.scss";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className={styles.navSection}>
              <div className={styles.menu}>
              <IoMenu />
              </div>
              <div className={styles.logo}>
                <h1>Winter</h1>
              </div>
              <div className={styles.nav}>
                <ul>
                  <li><NavLink to = "/">Home</NavLink></li>
                  <li><NavLink to = "add">Add</NavLink></li>
                  <li><NavLink to = "wishlist">Wishlist</NavLink></li>
                </ul>
              </div>
              <div className={styles.miniNav}>
                <ul>
                  <li><FaRegHeart />
                  </li>
                  <li><CiSearch /></li>
                </ul>
              </div>
            </div>
            </div>
            
        </nav>
      </header>
    </>
  );
};

export default Header;
