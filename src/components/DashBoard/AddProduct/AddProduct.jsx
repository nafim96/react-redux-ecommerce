import axios from "axios";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddProduct = () => {

    const [addProductAllData, setAddProductAllData] = useState({
        name: '',
        description: '',
        price: '',
        photo: '',
        quantity: '1'
    });
    const handleImgUpload = (event) => {
        const imgData = new FormData();
        imgData.set('key', '07e3f5810f445d3150142c8ea40f5780');
        imgData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imgData)
            .then(function (response) {
                console.log(response.data.status);
                const tempInfo = { ...addProductAllData };
                tempInfo.photo = (response.data.data.display_url);
                setAddProductAllData(tempInfo);
                if (response.data.status === 200) {
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-9 main-div">
                    <div>
                        <form onSubmit={console.log('object')}>
                            <h3>Add Products</h3>
                            <div className="card shadow card-width">
                                <form onSubmit={console.log('object')}></form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="pl-3 pr-3 pt-2">
                                            <h5>Service Name</h5>
                                            <input required onBlur={console.log('object')} className="form-control" type="text" name="serviceName" placeholder="Enter Service Name" />
                                        </div>
                                        <div className="mt-3 pl-3 pr-3 pb-3">
                                            <h5>Service Price</h5>
                                            <input required onBlur={console.log('object')} className="form-control" type="text" name="servicePrice" placeholder="Enter Price" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="pl-3 pr-3 pt-2">
                                            <h5>Description</h5>
                                            <textarea row="10" col="10" onBlur={console.log('object')} className="form-control" type="text" name="description" placeholder="Service description" ></textarea>
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
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddProduct
