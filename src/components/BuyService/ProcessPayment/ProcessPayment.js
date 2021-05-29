import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripePaymentForm from './StripePaymentForm/StripePaymentForm';

const stripePromise = loadStripe('pk_test_51IheoeBznXzAbbStozuAzhpgNB48TT2va3wFes01tO4rqDpPIdlCPrtLtaCQWfKBcZLej4n9P3ny38sgseZECZCM00brZu4Fn3');

const ProcessPayment = ({ handlePaymentSuccess }) => {

    return (
        <div>
            <Elements stripe={stripePromise}>
                <StripePaymentForm handlePaymentSuccess={handlePaymentSuccess}></StripePaymentForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;