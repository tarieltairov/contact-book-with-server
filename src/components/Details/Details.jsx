import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { contactsContext } from '../../context/ContactsContext';

const Details = () => {
    const params = useParams()

    const {getDetails, details}=useContext(contactsContext)
    console.log(details)

    useEffect(()=>{
        getDetails(params.id)
    },[])
    return (
        <div className="container"> 
            {details ? ( 
                <div> 
                 <h5>Name: {details.name}</h5>   
                 

                <h5>Contact's image: </h5> 
                <img className="m-1" width="250px" src={details.image} alt=""/> 
                 
                <h5>Phone-number: </h5> 
                <div>{details.number}</div> 
                </div> 
            ) : ( 
                <h1>Loading</h1>
            )} 
        </div> 
    );
};

export default Details;