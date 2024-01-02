import React from 'react';
import { useContext, useState } from 'react/cjs/react.development';
import './createproduct.css';


function CreateProductPage() { 

    const [productInputs, setProductInputs] = useState({
        product_name: "",
        product_price: "",
        product_category: "",
        product_long_desc: "",
        product_short_desc: "",
    })  
 
    const [productFiles, setProductFiles] = useState({
        product_image: "",
        product_alt_image1: "", 
        product_alt_image2: "",
        product_alt_image3: "",
        product_alt_video: ""
    });

    const handleInputChange = (e) => {
        setProductInputs({...productInputs, [e.target.name]: e.target.value})
    }

    const handleFileChange1 = (e) => {
        setProductFiles({
            product_image: e.target.files[0]
        })
    }

    const handleFileChange2 = (e) => {
        setProductFiles({
            ...productFiles, product_alt_image1: e.target.files[0]
        })
    }

    const handleFileChange3 = (e) => {
        setProductFiles({
            ...productFiles, product_alt_image2: e.target.files[0]
        })
    }

    const handleFileChange4 = (e) => {
        setProductFiles({
            ...productFiles, product_alt_image3: e.target.files[0]
        })
    }

    const handleFileChange5 = (e) => {
        setProductFiles({
            ...productFiles, product_alt_video: e.target.files[0]
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const formDetails = new FormData();

        // Appending/adding the text inputs into the formDetails array
        formDetails.append('product_name', productInputs);
        formDetails.append('product_price', productInputs.product_price);
        formDetails.append('product_category', productInputs.product_category);
        formDetails.append('product_long_desc', productInputs.product_long_desc);
        formDetails.append('product_short_desc', productInputs.product_short_desc);

        // Appending/adding the file inputs into the formDetails array
        formDetails.append('product_image', productFiles.product_image);
        formDetails.append('product_alt_image1', productFiles.product_alt_image1);
        formDetails.append('product_alt_image2', productFiles.product_alt_image2);
        formDetails.append('product_alt_image3', productFiles.product_alt_image3);
        formDetails.append('product_alt_image4', productFiles.product_alt_video);

        console.log('product-inputs:', productInputs);
        console.log('product-files:', productFiles);

        // USING fETCH 
        fetch('http://localhost:8000/api/add_product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            },
            body: productFiles
        })
        .then(res => res.json())
        .then(response => (
            console.log('backend-response:', response)
        ))
        .catch(err => (
            console.log(err, 'Please check your network connection. Error From Server.')
        ));

    }

    return (    
        <div id='create-product'>
            <div className='container'>
                <div className='add-product'>
                    <form onSubmit={ handleSubmit } encType='multipart/form-data'>
                        <div className='productform-header'>
                            <h2>Add Product</h2>
                        </div>
                        <div className='form-group'> 
                            <div className='form-group-inner'>
                                <label>Product Name</label>
                                <input type="text" name="product_name" value={productInputs.product_name} onChange={handleInputChange} />
                            </div>
                            <div className='form-group-inner'>
                                <label>Product Price</label>
                                <input type="text" name="product_price" value={productInputs.product_price} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-inner'>
                                <label>Product Image</label>
                                <input type="file" multiple="multiple" name="product_image" onChange={handleFileChange1} />
                            </div>
                            <div className='form-group-inner'>
                                <label>Product Category</label>
                                <select name='product_category' value={productInputs.product_category} onChange={handleInputChange}>
                                    <option value="electronics">Electronics</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="computer_and_accessories">Computers & Accessories</option>
                                    <option value="phones_and_tablets">Phones & Tablets</option>
                                    <option value="home_and_kitchen">Home & Kitchen</option>
                                    <option value="groceries">Groceries</option>
                                    <option value="musical_instruments">Musical Instruments</option>
                                    <option value="home_and_offices">Home & Offices</option>
                                    <option value="sports_and_outdoors">Sports & Outdoors</option>
                                    <option value="agriculture_and_food">Agriculture & Food</option>
                                    <option value="health_and_beauty">Health & Beauty</option>
                                    <option value="toys_and_games">Toys & Games</option>
                                </select>
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-inner'>
                                <label>Long Description</label>
                                <textarea name="product_long_desc" value={productInputs.product_long_desc} onChange={handleInputChange} />
                            </div>
                            <div className='form-group-inner'>
                                <label>Short Description</label>
                                <textarea name="product_short_desc" value={productInputs.product_short_desc} onChange={handleInputChange} />
                            </div>
                        </div>
                        <hr />
                        <div className='form-text'>
                            <h4>Alternative Images/Video.</h4>
                            <p>
                                <b>Note: </b> It's not compulsory your product must 
                                              have alternative images or videos. Only include them 
                                              if the product have.
                            </p>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-inner'>
                                <label>Product Alt Img1</label>
                                <input type="file" multiple="multiple" name="product_alt_image1" onChange={handleFileChange2} />
                            </div>
                            <div className='form-group-inner'>
                                <label>Product Alt Img2</label>
                                <input type="file" multiple="multiple" name="product_alt_image2" onChange={handleFileChange3} />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-inner'>
                                <label>Product Alt Img3</label>
                                <input type="file" multiple="multiple" name="product_alt_image3" onChange={handleFileChange4} />
                            </div>
                            <div className='form-group-inner'>
                                <label>Product Alt Video</label>
                                <input type="file" multiple="multiple" name="product_alt_video" onChange={handleFileChange5} />
                            </div>
                        </div>
                        <div className='product-btn'>
                            <button type="submit">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProductPage;


