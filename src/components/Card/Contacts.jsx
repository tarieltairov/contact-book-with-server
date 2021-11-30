import Button from '@restart/ui/esm/Button';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { contactsContext } from '../../context/ContactsContext';

const Contacts = ({item}) => {
    const {deleteContacts} = useContext(contactsContext)

    return (
        <div>
        <div style={{width: '100%', height: '100px'}}>

        </div>
        <div className="m-4">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Link style={{textDecoration: 'none'}} to={`/contacts/${item.id}`}><Card.Title>{item.name}</Card.Title></Link>
                <div className="d-flex justify-content-between mb-4">
                <Card.Text>{item.number}</Card.Text>
                <img width="60px" src="https://w7.pngwing.com/pngs/725/213/png-transparent-computer-icons-newsletter-email-business-phone-icon-angle-company-rectangle.png" alt="" />
                </div>
                <Button onClick={()=>deleteContacts(item.id)} className="btn btn-danger m-1">Delete</Button> 
                <Link to={`/edit/${item.id}`}><Button className="btn btn-success m-1 ">Update</Button></Link>
                <img width="40px" src="https://e7.pngegg.com/pngimages/432/941/png-clipart-telephone-call-dialer-android-android-text-telephone-call-thumbnail.png" alt="" className="m-1"/>
            </Card.Body>
            </Card>
        </div>
        </div>
    );
};

export default Contacts;
