import React, { useEffect, useState } from 'react';
import editBtn from '../../../all_Images/icons/Group 307.png';
import deleteBtn from '../../../all_Images/icons/Group 33150.png';
import MySpinner from '../../Spinner';
import Sidebar from '../Sidebar/Sidebar';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://arcane-savannah-57391.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteProduct = (productIndex, id) => {
        fetch(`https://arcane-savannah-57391.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully', result.deleteCount);
                if (result.deleteCount === 1) {
                    document.getElementById(productIndex).style.display = 'none';
                }
            })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-9">
                    {
                        products.length === 0 && <MySpinner />
                    }
                    <table className="container">
                        <thead>
                            <tr className="border-bottom">
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => {
                                    return (
                                        <tr id={index} className="border-bottom">
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td><span><img className="btnImg" src={editBtn} alt="" /></span> <span onClick={() => handleDeleteProduct(index, product._id)}><img className="btnImg" src={deleteBtn} alt="" /></span></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;