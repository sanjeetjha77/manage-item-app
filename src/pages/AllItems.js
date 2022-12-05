import React from 'react'
import ItemList from '../component/Items/ItemList';
import { useState, useEffect } from 'react';

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is first Item',
//     image: 'https://picsum.photos/seed/picsum/200/300',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description: 'This is first item description. This is first item description. This is first item description. '
//   },
//   {
//     id: 'm2',
//     title: 'This is second Item',
//     image: 'https://picsum.photos/seed/picsum/200/300',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description: 'This is second item description. This is second item description. This is second item description. '
//   },
//   {
//     id: 'm3',
//     title: 'This is third Item',
//     image: 'https://picsum.photos/seed/picsum/200/300',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description: 'This is third item description. This is third item description. This is third item description. '
//   },
// ]

const AllItems = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://manage-item-default-rtdb.firebaseio.com/items.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const items = [];

      for (const key in data) {
        const item = {
          id : key,
          ...data[key]
        };
        items.push(item);
      };

      setIsLoading(false);
      setLoadedItems(items);
    });
  }, []);

  if (isLoading) {
    return(
      <section>
        <p> Loading... </p>
      </section>
    )
  }


  return (
    <>
    <h1> All Items </h1>
    <ItemList items={loadedItems} />
    </>
  )
}

export default AllItems