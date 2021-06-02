import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
      <Navbar expand='lg' className='navbar'>
        <Nav className='justify-content nav'>
          <Nav.Link href='/' className='header-link'>Crimes in Manchester Centre and in Macclesfield, April 2021</Nav.Link>
          <Nav.Link href='/charts' className='charts-link'>Crime Charts</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavBar
