import React from 'react';
import './pagination.css';

function Pagination({ prodPerPage, totalProducts, handlePaginate }) {

    const pageNumbers = [];

    for (var x = 1; x <= Math.ceil(totalProducts / prodPerPage); x++) {
        pageNumbers.push(x);
    }

    return (
        <div id='pagination'> 
            <ul className='list-box'>
                {
                    pageNumbers.map(num => (
                        <li key={num} onClick={ () => handlePaginate(num) }>
                            <a href="">{ num }</a>
                        </li>  
                    )) 
                } 
            </ul>
        </div>
    )
}

export default Pagination;
