import React, { useContext } from 'react';
import Header from '../components/Header';
import AboutUs from '../components/about-components/AboutUs';
import AboutFeatures from '../components/about-components/AboutFeatures';
import AboutClients from '../components/about-components/AboutClients';
import TopFooter from '../components/TopFooter';
import { StoreContext } from './StoreContext';

function About() {

    const myContext = useContext(StoreContext);
    const isLoading = myContext[7];
    const allProducts = myContext[4]; 

    return (
        <div>
            {
                allProducts.length > 0 ?
                    <div>
                        {/* HEADER STARTS HEADER STARTS */}
                        {
                            isLoading ? <div className='container' style={{ marginTop: "5%", textAlign: "center" }}>Loading...</div> :
                                <Header
                                    id={allProducts[10].id}
                                    title='Flex Store'
                                    subtitle="About"
                                    image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[10].image}`}
                                />
                        }

                        {/* HEADER ENDS HEADER ENDS */}


                        {/* ABOUT US BEGINS */}

                        <AboutUs />

                        {/* ABOUT US ENDS */}


                        {/* ABOUT FEATURES BEGINS */}

                        <AboutFeatures />

                        {/* ABOUT FEATURES ENDS */}


                        {/* ABOUT CLIENTS BEGINS */}

                        <AboutClients />

                        {/* ABOUT CLIENTS ENDS */}


                        {/* TOP FOOTER STARTS  */}

                        <TopFooter />

                        {/* TOP FOOTER ENDS  */}
                    </div> : <div style={{ textAlign: 'center' }}>Loading..</div>
            }
        </div>
    )
}

export default About;
