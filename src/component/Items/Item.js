import React from 'react'
import { useContext } from 'react';
import Card from '../UI/Card';
import classes from './Item.module.css';
import FavoritesContext from '../../store/favourite-context';

const Item = (props) => {

  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
        <Card>
        <div className={classes.imageBox}>
            <img src={props.image} alt={props.title} />
        </div>
        <div>
            <h3> {props.title} </h3>
            <address> {props.address} </address>
            <p> {props.description} </p>
        </div>
        <div className={classes.actionBtn}>
        <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
        </Card>
    </li>
  )
}

export default Item