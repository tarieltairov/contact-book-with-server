import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const nav_items = [
        {
          title: "Contacts",
          link: "/contacts",
        },
        {
          title: "Add Contact",
          link: "/add",
          id: 3
        }
      ];

    return (
        <div>
            <Container>
            <Navbar expand="lg" variant="light" bg="light" fixed="top" className='d-flex justify-content-around'>
                <img width="50" src="http://s1.iconbird.com/ico/1012/Qetto2Icons/w256h2561350657638contacts.png" alt="" />
                {nav_items.map((item) => (
                <Link to={item.link} style={{textDecoration:'none'}}>
                    <Navbar.Brand >{item.title}</Navbar.Brand>
                </Link>
                ))}
            </Navbar>
    </Container>
        </div>
    );
};

export default Header;