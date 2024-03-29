import React  from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon,title})=> {

   
        return (
            <div>
                <nav className='navbar bg-primary'>
                    <h1>
                    <i className={icon}> {title}</i>
                        
                    </h1>
                </nav>
            </div>
        )
 
}


Navbar.defaultProps = {
    title : 'GitHub Finder',
    icon :  'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar
