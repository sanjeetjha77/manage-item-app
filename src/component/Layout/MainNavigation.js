import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favourite-context';

const MainNavigation = () => {

  const favoritesCtx = useContext(FavoritesContext);

  return (
    <div className={classes.header}>
        <div className={classes.brandLogo}>
            Manage Item App
        </div>
        <nav>
            <ul className={classes.navMenu}>
                <li> <Link to='/'> All Items </Link> </li>
                <li> <Link to='/new-item'> Add New Item </Link> </li>
                <li> <Link to='/favourites'> My Favourites 
                  <span> {favoritesCtx.totalFavorites} </span> </Link> </li>
            </ul>
        </nav>
    </div>
  )
}

export default MainNavigation