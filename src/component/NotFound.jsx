import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
    return (
        <div className='not-found__container'>
         <div className='not-found__container__content'> <h1>The page you’re looking for cannot be found. </h1></div>
            <Link to='/'> Home </Link>
           
        </div>
    );
};


export default NotFound;