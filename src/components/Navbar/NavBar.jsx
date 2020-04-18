import React from 'react'
import { Link } from "gatsby"
import { Navbar, Nav } from 'react-bootstrap'


const NavBar = () => {
    const styles = {
        backgroundImage: 'linear-gradient( 135deg, #348F50 0%, #56B4D3 100% )',
        color: '#fff',
        fontSize: '1.5rem'
    }
    return (
        <>
            <Navbar bg="dark">
                <Link to="/" className="text-white font-weight-bolder navbar-brand">SAMBARE ABOUBACAR</Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Link to="/blog/" className="text-white font-weight-bolder nav-link">
                            Blog
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}



export default NavBar
