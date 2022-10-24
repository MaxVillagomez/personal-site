import React from "react";
import {Link} from 'react-router-dom'   

const Navbar = () => {
    return(
        <div className='navbar-container'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/portfolio'>Portfolio</Link>
        </div>
    )
}

export default Navbar;