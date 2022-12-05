import React from 'react'
import { useContext } from 'react'
import FavoritesContext from '../store/favourite-context'
import ItemList from '../component/Items/ItemList'


const Favourites = () => {

  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p> You got no favorites yet. Start adding some ? </p>
  } else {
    content = <ItemList items={favoritesCtx.favorites} />
  }

  return (
    <>
    <h1> Favourites Item(s) </h1>
    {content}
    </>
  )
}

export default Favourites