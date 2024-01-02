import React from 'react';
import { Link } from 'react-router-dom';

function PreviewBtns({ showInvoice, setShowInvoice }) {

    return (
        <div className='preview-btns'>
            <div className='preview-btn send'>
                <button>Send Invoice</button>
            </div>
            <div className='preview-btn print'>
                <button>Print</button>
            </div>
            <div className='preview-btn download'>
                <button>Download</button>
            </div>
            <div className='preview-btn edit'>
                <button>Edit</button>
            </div>
            <div className='preview-btn print'>
                <button onClick={ () => {
                    setShowInvoice(!showInvoice);
                }}>Back To Invoice</button>
            </div>
        </div>
    )
}

export default PreviewBtns;
