import React, { useContext } from 'react';
import './homstyles.css';
import Carousel from './Carousel';
import { StoreContext } from '../../screens/StoreContext';

function HomeHeader() {

    const myContext = useContext(StoreContext);
    const isLoading = myContext[7];
    const allProducts = myContext[4]; 


    return (
        <div>
            {
                isLoading ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                    <div className='heroSection'>
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="d-block w-100" alt="First slide">
                                        <Carousel
                                            id={allProducts[18].id}
                                            subtitle=""
                                            title="Beautiful Furnitures that will thrill your visitors."
                                            description="Our furnitures are built with quality timbers."
                                            image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[18].image}`}
                                        />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <Carousel
                                        id={allProducts[19].id}
                                        subtitle=""
                                        title="New Wears Collection Trend In 2022"
                                        description="Our amazing store where shopping is fun!"
                                        image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[19].image}`}
                                    />
                                </div>
                                <div class="carousel-item">
                                    <Carousel
                                        id={allProducts[20].id}
                                        subtitle=""
                                        title="New Watch Collection To Match Your Outfit"
                                        description="Our amazing store got more of this!"
                                        image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[20].image}`}
                                    />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
            }
        </div>
    )
}

export default HomeHeader;
