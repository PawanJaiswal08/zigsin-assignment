import React from 'react';
import './Navbar.css';
import logo from './../../assets/images/logo.jpg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navSlide = () => {
        
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        navbarLinks.classList.toggle('active')
    } 

    const navElement = [ 'Team', 'Contacts', 'Issues', 'Info' ]

    return (
        <nav className="navbar" style={{paddingTop: "10px"}}>
            <NavLink to="/" style={{textDecoration: 'none'}} className="logo">
                <img src={logo} alt="" srcSet="" width="40px" height="40px" style={{marginLeft:"80%"}}/>
                <div className='brandName'>FRIEND.finder</div>
            </NavLink>
            <NavLink to={false} className="toggle-button" onClick={navSlide}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </NavLink>
            <div className="navbar-links">
                <ul>
                    {
                        navElement && navElement.map((value, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={value.toLowerCase()}>{value}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
