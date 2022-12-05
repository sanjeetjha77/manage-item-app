import React from 'react'
import classes from './NewItemForm.module.css'
import { useRef } from 'react'
import Card from '../UI/Card';

const NewItemForm = (props) => {

    const titleInputRef =  useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const itemData = {
            title : enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }

        props.onAddItem(itemData);
    }


  return (
    <Card>
        <form className={classes.form} onSubmit={submitFormHandler} >
            <div className={classes.formGroup}>
                <label htmlFor='title'> Item Name </label>
                <input type='text' id='title' className={classes.formControl} ref={titleInputRef} />
            </div>
            <div className={classes.formGroup}>
                <label htmlFor='image'> Image URL </label>
                <input type='text' id='image' className={classes.formControl} ref={imageInputRef} />
            </div>
            <div className={classes.formGroup}>
                <label htmlFor='address'> Address </label>
                <input type='text' id='address' className={classes.formControl} ref={addressInputRef} />
            </div>
            <div className={classes.formGroup}>
                <label htmlFor='description'> Description </label>
                <textarea className={classes.formControl} id='description' rows='5' ref={descriptionInputRef} /> 
            </div>
            <div className={classes.formGroup}>
                <button className={classes.addBtn}> + Add Item </button>
            </div>
        </form>
    </Card>
  )
}

export default NewItemForm