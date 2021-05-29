import React from 'react';
import './Admin.css';
import { useState } from 'react';
import axios from 'axios';
import ManageProduct from '../ManageProduct/ManageProduct';
// import Navbar from '../Shared/Navbar/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThLarge, faListOl, faPlusSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AllOrders from '../AllOrders/AllOrders';

const Admin = () => {
    const [manageServices, setManageServices] = useState(false);
    const [addService, setAddService] = useState(true);
    const [makeAdmin, setMakeAdmin] = useState(false);
    const [orderList, setOrderList] = useState(false);
    const [fileSelected, setFileSelected] = useState(true);
    const [addProductAllData, setAddProductAllData] = useState({
        name: '',
        description: '',
        price: '',
        photo: '',
        quantity: '1'
    });

    const handleClickForManageServices = () => {
        setManageServices(true);
        setAddService(false)
        setMakeAdmin(false)
        setOrderList(false)
    }
    const handleClickForAddService = () => {
        setManageServices(false)
        setAddService(true)
        setMakeAdmin(false)
        setOrderList(false)
    }
    const handleClickForMakeAdmin = () => {
        setManageServices(false)
        setAddService(false)
        setMakeAdmin(true)
        setOrderList(false)
    }
    const handleClickForOrderList = () => {
        setManageServices(false)
        setAddService(false)
        setMakeAdmin(false)
        setOrderList(true)
    }

    const handleImgUpload = (event) => {
        const imgData = new FormData();
        imgData.set('key', '07e3f5810f445d3150142c8ea40f5780');
        imgData.append('image', event.target.files[0]);
        setFileSelected(false);


        axios.post('https://api.imgbb.com/1/upload',
            imgData)
            .then(function (response) {
                console.log(response.data.status);
                const tempInfo = { ...addProductAllData };
                tempInfo.photo = (response.data.data.display_url);
                setAddProductAllData(tempInfo);
                if (response.data.status === 200) {
                    setFileSelected(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleBlur = (event) => {
        if (event.target.name === 'serviceName') {
            const tempInfo = { ...addProductAllData };
            tempInfo.name = (event.target.value);
            setAddProductAllData(tempInfo);
        }
        if (event.target.name === 'servicePrice') {
            const tempInfo = { ...addProductAllData };
            tempInfo.price = (event.target.value);
            setAddProductAllData(tempInfo);
        }
        if (event.target.name === 'description') {
            const tempInfo = { ...addProductAllData };
            tempInfo.description = (event.target.value);
            setAddProductAllData(tempInfo);
        }
    }

    const handleAddProduct = (event) => {
        event.preventDefault();
        if (fileSelected) {
            const url = 'https://arcane-savannah-57391.herokuapp.com/addProduct';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addProductAllData)
            })
                .then(res => {
                    console.log('server side response', res.status);
                    if (res.status === 200) {
                        event.target[0].value = '';
                        event.target[1].value = '';
                        event.target[2].value = '';
                        event.target[3].value = '';
                        setAddProductAllData({
                            name: '',
                            description: '',
                            price: '',
                            photo: '',
                            quantity: '1'
                        });
                    }
                });
        }

    }


    return (
        <div>
            <div className="container-fluid">
                {/* side menu */}
                <div className="row">
                    <div className="col-md-3 menu-div bg-success">
                        <div className="d-flex justify-content-center">
                            <div className=" menu-container">
                                {/* <p id="manageProducts" onClick={handleClickForManageServices} className="row menu"> <FontAwesomeIcon className="icon" icon={faThLarge} /> Manage Services</p>
                                <p id="addProducts" onClick={handleClickForAddService} className="row menu"> <FontAwesomeIcon className="icon" icon={faPlusSquare} /> Add Service</p>
                                <p id="editProducts" onClick={handleClickForMakeAdmin} className="row menu"> <FontAwesomeIcon className="icon" icon={faUserPlus} /> Make Admin</p>
                                <p id="editProducts" onClick={handleClickForOrderList} className="row menu"> <FontAwesomeIcon className="icon" icon={faListOl} /> Order List</p> */}


                                <p id="manageProducts" onClick={handleClickForManageServices} className="row menu">Manage Services</p>
                                <p id="addProducts" onClick={handleClickForAddService} className="row menu">Add Service</p>
                                <p id="editProducts" onClick={handleClickForMakeAdmin} className="row menu">Make Admin</p>
                                {/* <p id="editProducts" onClick={handleClickForOrderList} className="row menu">Order List</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9 main-div">
                        {/* add product */}
                        {addService && <div>
                            <form onSubmit={handleAddProduct}>
                                <h3>Add Products</h3>
                                <div className="card shadow card-width">
                                    <form onSubmit={handleAddProduct}></form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="pl-3 pr-3 pt-2">
                                                <h5>Service Name</h5>
                                                <input required onBlur={handleBlur} className="form-control" type="text" name="serviceName" placeholder="Enter Service Name" />
                                            </div>
                                            <div className="mt-3 pl-3 pr-3 pb-3">
                                                <h5>Service Price</h5>
                                                <input required onBlur={handleBlur} className="form-control" type="text" name="servicePrice" placeholder="Enter Price" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="pl-3 pr-3 pt-2">
                                                <h5>Description</h5>
                                                <textarea row="10" col="10" onBlur={handleBlur} className="form-control" type="text" name="description" placeholder="Service description" ></textarea>
                                            </div>
                                            <div className="mt-3 pl-3 pr-3 pb-3">
                                                <h5>Add Photo</h5>
                                                <input onChange={handleImgUpload} type="file" name="productImg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success mt-3 d-flex float-right">Save</button>
                            </form>
                        </div>}

                        {/* manage product */}
                        {manageServices && <div>
                            <ManageProduct></ManageProduct>
                        </div>}

                        {/* make admin */}
                        {makeAdmin && <div>
                            <MakeAdmin></MakeAdmin>
                        </div>}

                        {/* all orders list */}
                        {/* {orderList && <div> */}
                            {/* <h1>All orders list</h1> */}
                            {/* <AllOrders></AllOrders> */}
                        {/* </div>} */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;