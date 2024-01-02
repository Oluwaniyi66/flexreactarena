import React, { useContext} from 'react';
import './shopstyles.css';
import Product from './Product';
import { StoreContext } from '../../screens/StoreContext';
import { useState } from 'react';
import Pagination from '../pagination-components/Pagination';


function Products() {

    const myContext = useContext(StoreContext);
    const isLoading = myContext[7];   
    const allProducts = myContext[4];  
    const searchTerm = myContext[14]; 
    const sort = myContext[28]; 

    const [currentPage, setCurrentPage] = useState(1);  
    const [prodPerPage, setProdPerPage] = useState(5);

    const indexOfLastProd = currentPage * prodPerPage;
    const indexOfFirstProd = indexOfLastProd - prodPerPage;
    const currentProducts = allProducts.slice(indexOfFirstProd, indexOfLastProd);

    const handlePaginate = (pageNumber) => { 
        setCurrentPage(pageNumber); 
    }
  
    return (
        <div> 
            {
                isLoading ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> : 
                currentProducts.filter(val => {
                    if (searchTerm == "") { 
                        return val;
                    } else if ( val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    } else if (val.status1.toLowerCase() == searchTerm.toLowerCase()) {
                        return val;
                    } else if (val.status2.toLowerCase() == searchTerm.toLowerCase()) {
                        return val;
                    } else if (val.status3.toLowerCase() == searchTerm.toLowerCase()) {
                        return val;
                    } else if (val.status4.toLowerCase() == searchTerm.toLowerCase()) { 
                        return val;
                    } else if (val.status5.toLowerCase() == searchTerm.toLowerCase()) {
                        return val;
                    } else if (val.category.toLowerCase() == searchTerm.toLowerCase()) {
                        return val;
                    }
                }).map((product) => (
                    <Product 
                        key={product.id} 
                        id={ product.id } 
                        image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${product.image}`}
                        title={ product.name }  
                        price={ product.discount } 
                        rating="2" 
                        discount={ product.price } 
                        description={ product.long_desc } 
                        item={product}
                        />
                ))
                
            }

            {/* Pagination - Pagination - Pagination  */}
            {
                isLoading ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> : 
                    <Pagination 
                        prodPerPage={prodPerPage} 
                        totalProducts={allProducts.length} 
                        handlePaginate={handlePaginate} 
                    />
            }
        </div>
    )
}

export default Products;
