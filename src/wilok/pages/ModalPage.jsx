import React, { useState, useEffect } from 'react';
import "../styles/style.css";
import { testimonialsArray } from '../db/Testimonials';


function ModalPage() {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const itemsLength = testimonialsArray?.length;

    // Function to change the picture backwards 
    const moveBackward = () => {
        setCurrentItemIndex(currentItemIndex == 0 ? itemsLength - 1 : currentItemIndex - 1)
    }

    // Function to change the picture forwards 
    const moveForward = () => {
        setCurrentItemIndex(currentItemIndex == itemsLength - 1 ? 0 : currentItemIndex + 1)
    }

    console.log('testimonialsArry', testimonialsArray)


    return (
        <div className='modal-section'>
            {/* Body  */}
            {
                testimonialsArray.length > 0 ?
                    testimonialsArray.map((item, index) => (
                        <div>
                            {
                                index == currentItemIndex &&
                                <div className='modal-section-inner'>
                                    <div className="left">
                                        <div className="image">
                                            <img src={item.img} alt="testimonial-img" />
                                        </div>
                                        <div className="left-text">
                                            <h1>{item.name}</h1>
                                            <h3>{item.profession}</h3>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="content">
                                            <div className="content-sign">"</div>
                                            <div className="content-text">
                                                {item.body}
                                            </div>
                                            <div className="content-number">
                                                <h1>{`0${item.id}`}</h1>
                                            </div>
                                        </div>
                                        {/* Controllers  */}
                                        <div className="controllers">
                                            <div className="control-btn previous" onClick={moveBackward}>
                                                Prev
                                            </div>
                                            <div className="control-btn next" onClick={moveForward}>
                                                Next
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    )) : 'No testimonials'
            }

        </div>
    )
}

export default ModalPage;
