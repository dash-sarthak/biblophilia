import React from 'react';
import './navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='nav'>
                <NavItem name='LOGO' />
                <NavItem name='Work' />
                <NavItem name='About' />
                <NavItem name='Contact' />
            </ul>
        </nav>
    );
}

function NavItem({ name }) {

    return (
        <li className='nav-item'>
            <a href="#" className='link'> {name}</a>
        </li>
    );
}


export default Navbar