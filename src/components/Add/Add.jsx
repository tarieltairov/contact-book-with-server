import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { contactsContext } from '../../context/ContactsContext';

const Add = () => {
    const[newContact, setNewContact] = useState({
        name: '', 
        number: '',
        image: '',
    })

    const { createContact} = useContext(contactsContext)

    function handleValues (e) {
        let values = {
            ...newContact,
            [e.target.name]: e.target.value,
        };
        setNewContact(values)
    }

    function checkValues() {
        if (
          !newContact.name ||
          !newContact.number ||
          !newContact.image
        ) {
          alert("Заполните поля!");
          return;
        } else {
            createContact(newContact);
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div style={{width: '100%', height: '100px'}}></div>
            <input className="m-1 col-3" type="text" name="name" onChange={handleValues} placeholder="enter name"/>
            <input className="m-1 col-3" type="number" name="number" onChange={handleValues} placeholder="enter phone number"/>
            <input className="m-1 col-3" type="text" name="image" onChange={handleValues} placeholder="enter url for image"/>
            <Link to="/contacts" className="col-3"><button onClick={() => checkValues()} className="btn btn-primary col-12">Add</button></Link>
        </div>
    );
};

export default Add;