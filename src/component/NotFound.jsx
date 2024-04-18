import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
    return (
        <div>
            404 NOT FOUND
            <Link to='/'> Home </Link>
           
        </div>
    );
};


export default NotFound;