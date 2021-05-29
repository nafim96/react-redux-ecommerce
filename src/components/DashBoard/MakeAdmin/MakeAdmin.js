import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {

    const [admin, setAdmin] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        const url = 'https://arcane-savannah-57391.herokuapp.com/addAdmins';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => console.log('Success at making Admin'))
            .catch(err => console.log(err.message))
        setAdmin('')
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-9">
                    <form onSubmit={handleSubmit}>
                        <h3>Make Admin</h3>
                        <div className="card shadow card-width">
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="pl-3 pr-3 pt-2 pb-4">
                                        <h5>Email</h5>
                                        <input required onChange={e => setAdmin(e.target.value)} className="form-control" type="email" name="buyer-email" placeholder="New Admin Email" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success mt-3 d-flex float-right">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;