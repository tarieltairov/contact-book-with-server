import React, { useReducer } from "react";
import axios from "axios";

export const contactsContext = React.createContext(); //создаем контекст

const API = "http://localhost:8001/contacts";
const INIT_STATE = {
    contacts: [],
      details: null,
      edited: null,
    //здесь пишем начальное значение
};
const reducer = (state = INIT_STATE, action) => {
    // создаем кейсы
    switch (action.type) {
        case "GET_CONTACTS":
            return {
                ...state,
                contacts: action.payload.data,
            };
        case "GET_FOR_EDIT":
            return {
                ...state,
                edited: action.payload.data,
            };
        case "GET_DETAILS":
            return {
                ...state,
                details: action.payload.data,
            };
        default:
            return state
    };
}
const ContactsСontextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    // получаем dispatch, чтоб менять state


    const createContact = async (newContacts) => {
        await axios.post(API, newContacts);
        getContacts();
        console.log(newContacts)
    };
    // пишем функции (пример выше)
    async function getContacts() {
        let res = await axios.get(API);
        console.log(res);
        dispatch({
            type: "GET_CONTACTS",
            payload: res,
        });
    }
      async function getDetails(id) {
        let res = await axios.get(`${API}/${id}`);
        dispatch({
            type: "GET_DETAILS",
            payload: res,
          });
      }
      async function getContactsFor(id) {
        console.log(id)
        let res = await axios.get(`${API}/${id}`);
        dispatch({
            type: "GET_FOR_EDIT",
            payload: res,
          });
      }
    
          async function editContacts (id, editedProduct) {
              console.log(id, editedProduct)
              await axios.patch(`${API}/${id}`, editedProduct)
              getContacts()
          }

      async function deleteContacts (id) {
          await axios.delete(`${API}/${id}`)
          getContacts()
      }
    return (
        <contactsContext.Provider
            value={{
                contacts: state.contacts,
                details: state.details,
                edited: state.edited,
                //  передаем под ключом videos измененный INIT_STATE.videos
                getContacts,
                createContact,
                getDetails,
                deleteContacts,
                getContactsFor,
                editContacts,
                // передаем функции
            }}
        >
            {children}
        </contactsContext.Provider>
    );
};
export default ContactsСontextProvider;