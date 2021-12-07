 import React, { useContext, useEffect } from 'react';
import { contactsContext } from '../../context/ContactsContext';
import Contacts from '../Card/Contacts';

const ContactList = () => {
    const{getContacts, contacts} = useContext(contactsContext);
    useEffect(()=>{
        getContacts()
    },[])
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {contacts.map((item) => (
                <Contacts key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ContactList;
