import React from 'react'
import NewItemForm from '../component/Items/NewItemForm'
import { useHistory } from 'react-router-dom'

const NewItem = () => {

  const history = useHistory();

const addItemHandler = (itemData) => {
  fetch('https://manage-item-default-rtdb.firebaseio.com/items.json', 
  {
    method: 'POST',
    body : JSON.stringify(itemData),
    header : {
      'Content-Type' : 'application/json'
    }
  }
  ).then(() => {
    history.replace('/');
  });

}

  return (
    <>
    <h1> Add New Item </h1>
    <NewItemForm onAddItem={addItemHandler} />
    </>
  )
}

export default NewItem