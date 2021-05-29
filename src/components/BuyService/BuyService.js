import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
// import { faStripe } from '@fortawesome/free-brands-svg-icons';
import ProcessPayment from './ProcessPayment/ProcessPayment';

const BuyService = () => {
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [enablePayment, setEnablePayment] = useState(false);//false
    const history = useHistory();
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState({});
    const [eventData, setEventData] = useState(null);
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let todayDate = `${date}/${month}/${year}`;


    const [addBuyProductData, setAddBuyProductData] = useState({
        UserName: '',
        accountUserName: '',
        email: '',
        orderTimeDate: '',
        buyerEmail: '',
        paymentMethod: '',
        serviceName: '',
        serviceDescription: '',
        price: '',
        serviceImg: '',
        orderStatus: 'Pending',
        quantity: '1',
        paymentInfo: null
    });

    useEffect(() => {
        fetch(`https://arcane-savannah-57391.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setSelectedItem(data))
        setLoadingSpinner(false);

    }, [id])

    // input fields for buy product
    const handleBlur = (event) => {
        if (event.target.name === 'buyer-name') {
            const tempInfo = { ...addBuyProductData };
            tempInfo.UserName = (event.target.value);
            setAddBuyProductData(tempInfo);
        }
        if (event.target.name === 'buyer-email') {
            const tempInfo = { ...addBuyProductData };
            tempInfo.buyerEmail = (event.target.value);
            setAddBuyProductData(tempInfo);
        }
    }

    const handleChange = event => {
        const tempInfo = { ...addBuyProductData };
        tempInfo.paymentMethod = (event.target.id);
        setAddBuyProductData(tempInfo);
    }


    // server post
    const handleSubmit = (event) => {
        event.preventDefault();
        setEventData(event);
        if (event.target[2].value === '') {
            // console.log('inside empty product');
            alert('Without choosing a service you cannot buy any service, please select a service from "Our popular services" on home screen');
        }
        else {
            setEnablePayment(true);
        }


    }

    const handlePaymentSuccess = (paymentInfo) => {
        const event = eventData;
        event.preventDefault();
        const tempInfo = { ...addBuyProductData };
        tempInfo.serviceName = selectedItem.name;
        tempInfo.email = loggedInUser.email;
        tempInfo.accountUserName = loggedInUser.name;
        tempInfo.orderTimeDate = todayDate;
        tempInfo.price = selectedItem.price;
        tempInfo.serviceImg = selectedItem.photo;
        tempInfo.serviceDescription = selectedItem.description;
        tempInfo.paymentInfo = paymentInfo;

        if (event.target[2].value === '') {
            // console.log('inside empty product');
            // alert('Without choosing a service you cannot buy any service, please select a service from "Our popular services" on home screen');
        }

        else {
            const url = 'https://arcane-savannah-57391.herokuapp.com/addOrderedProduct';
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
                        event.target[1].value = '';
                        event.target[3].checked = false;
                        event.target[4].checked = false;
                        event.target[5].value = '';

                        setAddBuyProductData({
                            UserName: '',
                            accountUserName: '',
                            email: '',
                            orderTimeDate: '',
                            buyerEmail: '',
                            paymentMethod: '',
                            serviceName: '',
                            serviceDescription: '',
                            price: '',
                            serviceImg: '',
                            orderStatus: 'Pending',
                            quantity: '1',
                            paymentInfo: null
                        });
                        setEnablePayment(false);
                    }
                });

        }

    }

    return (
        <div>
            {
                loadingSpinner && <div className="m-5">
                    <div className="d-flex justify-content-center text-primary">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            }

            <h3>Buy Service</h3>
            <div className="card shadow card-width">
                {!enablePayment && <form onSubmit={handleSubmit}>

                    <div>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <div className="pl-3 pr-3 pt-2">
                                    <h5>Add Name</h5>
                                    <input required onBlur={handleBlur} className="form-control" type="text" name="buyer-name" placeholder="Enter Name" />
                                </div>
                                <div className="mt-3 pl-3 pr-3 pb-3">
                                    <h5>Add Email</h5>
                                    <input required onBlur={handleBlur} className="form-control" type="email" name="buyer-email" placeholder="Enter Email" />
                                </div>
                                <div className="mt-3 pl-3 pr-3 pb-3">
                                    <h5>Service Name</h5>
                                    <input required onBlur={handleBlur} className="form-control" type="text" name="service-name" value={selectedItem.name} readOnly placeholder="Service Name" />
                                </div>
                                <div className="row">
                                    <p className=" mt-1 pl-5 pr-3 pb-1">Your Service Charge Will be - ${selectedItem.price}</p>
                                </div>
                                {/* <div className="mt-2 pl-3 pr-3">
                                    <h5>Pay With</h5>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="radio" required onChange={handleChange} id="credit-card" name="paymentMethod" />
                                            <label for="credit-card"> <FontAwesomeIcon className="brand-icon" icon={faCreditCard} /> Credit Card</label><br />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="radio" required onChange={handleChange} id="Stripe" name="paymentMethod" />
                                            <label for="Stripe"> <FontAwesomeIcon className="brand-icon" icon={faStripe} /> Stripe</label><br />
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success mt-3 mr-3 mb-3 d-flex float-right">Buy</button>
                </form>}

                {enablePayment && <div className="mt-3 pl-3 pr-3 pb-3">
                    <h5>Add Card Number</h5>
                    <ProcessPayment handlePaymentSuccess={handlePaymentSuccess} className="mb-3"></ProcessPayment>
                </div>}

            </div>

        </div>
    );
};

export default BuyService;