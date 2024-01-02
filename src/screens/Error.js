import React from 'react';
import Header from '../components/Header';
import ErrorPage from '../components/error-components/ErrorPage';
import TopFooter from '../components/TopFooter';
import { StoreContext } from './StoreContext';

function error() {

    return (
        <div>

            {/* HEADER STARTS HEADER STARTS */}
                <Header id="2" title='404' subtitle="Error" image="/assets/error-images/error4.webp" />
            {/* HEADER ENDS HEADER ENDS */}

            {/* ERROR PAGE  */}
                <ErrorPage />
            {/* ERROR PAGE  */}

            {/* TOP FOOTER  */}
                <TopFooter />
            {/* TOP FOOTER  */}

        </div>
    )
}

export default error;
