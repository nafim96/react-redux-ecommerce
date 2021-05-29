import React, { useState } from 'react';

const MakeAdmin = () => {
    const [newAdmin, setNewAdmin] = useState({
        email: '',
    });

    // input fields for buy product
    const handleBlur = (event) => {
        if (event.target.name === 'buyer-email') {
            const tempInfo = { ...newAdmin };
            tempInfo.email = (event.target.value);
            setNewAdmin(tempInfo);
        }
    }

    // server post
    const handleSubmit = (event) => {
        event.preventDefault();
        const tempInfo = { ...newAdmin };
        console.log(tempInfo);

        const url = 'https://arcane-savannah-57391.herokuapp.com/addAdmins';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tempInfo)
        })
            .then(res => {
                console.log('server side response', res.status);
                if (res.status === 200) {
                    event.target[0].value = '';
                    setNewAdmin({
                        email: '',
                    });
                }
            });

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Make Admin</h3>
                <div className="card shadow card-width">
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="pl-3 pr-3 pt-2 pb-4">
                                <h5>Email</h5>
                                <input required onBlur={handleBlur} className="form-control" type="email" name="buyer-email" placeholder="New Admin Email" />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success mt-3 d-flex float-right">Save</button>
            </form>

        </div>
    );
};

export default MakeAdmin;