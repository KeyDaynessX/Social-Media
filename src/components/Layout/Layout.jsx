import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Recommendation from '../Recommendation/Recommendation';

const Layout = () => {
  return (
    <Container fluid className="p-0">
    <div className='app-wrapper'>
       <Header />
       <Navbar />
       <Recommendation/>
       <Outlet/>
    </div>
    </Container>); 
}

export default Layout