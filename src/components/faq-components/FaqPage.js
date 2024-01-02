import React, { useContext } from 'react';
import FaqLeft from './FaqLeft';
import FaqRight from './FaqRight';
import './faqstyles.css';
import { StoreContext } from '../../screens/StoreContext';

function FaqPage() {

    const myContext= useContext(StoreContext);
    const allFaqs = myContext[24];
    const isLoading5 = myContext[25]; 
 
    return (
        <div id='faq-page'>
            <div className='container'>
                <div className='faq-left'>
                    <div className='faq-left-main-header'>
                        <h2>Frequently Asked Questions</h2> 
                    </div>
                    {
                        isLoading5 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h4>Loading...</h4></div> :   
                        allFaqs.map(faq => (
                            <FaqLeft 
                                title={ faq.subject }
                                details={ faq.question }
                            />
                        ))
                    }
                    
                </div>
                <div className='faq-right'>
                    <FaqRight />
                </div>
            </div>
        </div>
    )
}

export default FaqPage;
