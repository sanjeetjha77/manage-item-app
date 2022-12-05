import React from 'react'
import Item from './Item';
import classes from './ItemList.module.css';

const ItemList = (props) => {
  return (
    <ul className={classes.list}>
        {props.items.map((item) => {
            return (
                <Item 
                key={item.id} 
                id={item.id} 
                title={item.title} 
                image={item.image} 
                address={item.address} 
                description={item.description} />
            )
        })}

    </ul>
  )
}

export default ItemList