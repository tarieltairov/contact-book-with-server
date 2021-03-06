import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactList from './components/ContactList/ContactList';
import Contacts–°ontextProvider from './context/ContactsContext'
import Add from './components/Add/Add';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
function App() {
  return (
    <Contacts–°ontextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/contacts" element={<ContactList />}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/contacts/:id"  element={<Details />}/>
            <Route path="/edit/:id"  element={<Edit />}/>
        </Routes>
      </BrowserRouter>
      </Contacts–°ontextProvider>
  );
}

export default App;
