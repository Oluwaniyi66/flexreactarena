import React, { useContext, useEffect } from 'react';
import Product from './Product';
import './gridstyles.css';
import { StoreContext } from '../../screens/StoreContext';
import { useState } from 'react';
import Pagination from '../pagination-components/Pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Products() {

    const myContext = useContext(StoreContext);
    const isLoading = myContext[7];
    const allProducts = myContext[4];
    const searchTerm = myContext[14];

    const [currentPage, setCurrentPage] = useState(1);
    const [prodPerPage, setProdPerPage] = useState(8);

    const indexOfLastProd = currentPage * prodPerPage;
    const indexOfFirstProd = indexOfLastProd - prodPerPage;
    const currentProducts = allProducts.slice(indexOfFirstProd, indexOfLastProd);

    const handlePaginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])

    return (
        <div className="container" id="section-3" data-aos="fade-down">
            <div className="products">
                {
                    isLoading ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                        currentProducts.filter(val => {
                            if (searchTerm == "") {
                                return val;
                            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
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
                                id={product.id}
                                image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${product.image}`}
                                title={product.name}
                                price={product.price}
                                discount={product.discount} />
                        ))
                }
            </div>
            <div className='pagination'>
                {
                    isLoading ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                        <Pagination
                            prodPerPage={prodPerPage}
                            totalProducts={allProducts.length}
                            handlePaginate={handlePaginate}
                        />
                }
            </div>
        </div>
    )
}

export default Products;
