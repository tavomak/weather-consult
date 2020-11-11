import React from 'react';

const Header = ({titulo}) => {
    return ( 
        <nav className="bg-primary text-white py-3">
            <h1 className="text-center">{titulo}</h1>
        </nav>
     );
}
 
export default Header;