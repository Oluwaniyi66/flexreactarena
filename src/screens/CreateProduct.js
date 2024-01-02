import React from 'react';
import Header2 from '../components/Header2';
import CreateProductPage from '../components/dashboard-components/CreateProductPage';

function CreateProduct() {
    
    return (
        <div>

            {/* HEADER STARTS HEADER STARTS  */}
                <Header2  subtitle="Add Product"/>
            {/* HEADER ENDS HEADER ENDS  */}

            {/* CREATE PRODUCT PAGE START */}
                <CreateProductPage />
            {/* CREATE PRODUCT PAGE ENDS */}
        </div>
    )
}

export default CreateProduct;
