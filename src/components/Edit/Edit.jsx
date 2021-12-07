import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { contactsContext } from '../../context/ContactsContext';

const Edit = () => {
    const params = useParams();

    const{getContactsFor, edited, editContacts} = useContext(contactsContext)

    useEffect(()=>{
        getContactsFor(params.id)
    }, [])

    const [editedProduct, setEditedProduct] = useState({
        name: '',
        number: '',
        image: ''
    });

    useEffect(()=>{
        setEditedProduct(edited)
    },[edited])

    function handleValues(e){
        let values = {
            ...editedProduct,
            [e.target.name]: e.target.value,
        };
        setEditedProduct(values)
    }

    function checkValues(){
        if(!editedProduct.name || !editedProduct.number || !editedProduct.image){
            alert('please, enter data for edit')
            return
        }else{
            editContacts(params.id, editedProduct)
        }
    }

    console.log('qweqweqweqweq')

    return (
                <div>
                  
        {editedProduct ? <div className="container d-flex flex-column align-items-center">
        <div style={{width: '100%', height: '100px'}}></div>
      <input
        value={editedProduct.name}
        type="text"
        className="m-1 col-4"
        name="name"
        onChange={handleValues}
        placeholder="Name"
      />
      <input
        value={editedProduct.number}
        type=""number
        className="m-1 col-4"
        name="number"
        onChange={handleValues}
        placeholder="Number"
      />
      <input
        value={editedProduct.image}
        type="text"
        className="m-1 col-4"
        name="image"
        onChange={handleValues}
        placeholder="Image's url"
      />
      <Link to="/contacts" className="btn btn-success col-4">
        <button onClick={checkValues} className="btn btn-success col-12">Save</button>
      </Link>
    </div> : <h1>loading</h1>}
    </div>
    );
};

export default Edit;