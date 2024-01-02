import React from 'react';
import PreviewLeftSect1 from './PreviewLeftSect1';
import PreviewLeftSect2 from './PreviewLeftSect2';
import PreviewLeftSect3 from './PreviewLeftSect3';
import PreviewLeftSect4 from './PreviewLeftSect4';
import './invoice.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function PreviewInvoice() {
  const navigate = useNavigate();
  const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
  const order = JSON.parse(localStorage.getItem('order'));

  // Check if the user has successfully paid for his/her order else the user can't visit this page.
  const checkOrderDetails = () => {
    if (orderDetails == null && order == null) {
      navigate('/shop')
    }
  }

  // This runs immediately a user tries to visit that page without making payment.
  useEffect(() => {
    checkOrderDetails();
  }, [])

  return (
    <div id='preview-invoice'>
      <div className='preview-container'>
        <div className='preview-left'>
          <PreviewLeftSect1 />
          <PreviewLeftSect2 />
          <PreviewLeftSect3 />
          <PreviewLeftSect4 />
          <div className='preview-left-sect-5'>
            <h4>Note: Thank you for doing business with us.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewInvoice;
