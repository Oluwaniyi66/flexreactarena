import React from 'react';


function PreviewLeftSect3() {
    let customerCart = JSON.parse(localStorage.getItem('cart')); 

    return (
        <div className='preview-left-sect-3'>
            <div className='table-quantities'> 
                <table>
                    <thead>
                        <th>S.NO</th>
                        <th>ITEM NAME</th>
                        <th>QTY</th>
                        <th>PRICE</th>
                        <th>SUB-TOTAL</th>
                    </thead>
                    <tbody>
                        {
                            customerCart.map((prod, index) => (
                                <tr>
                                    <td>{ index + 1 }</td>
                                    <td>{ prod.name }</td>
                                    <td>{ prod.qty }</td>
                                    <td>{ prod.price }</td>
                                    <td>{ prod.qty * prod.price }</td>
                                    {/* <td>${parseInt(item.item_price) * parseInt(item.item_qty)}</td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PreviewLeftSect3;
