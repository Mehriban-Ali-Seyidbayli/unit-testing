import React from 'react';
import Scoops from './Scoops';
import OrderForm from '../form/OrderForm';
import Toppings from './Toppings';

const WelcomePage = () => {
    return (
        <div>
            <Scoops />
            <Toppings />
            <OrderForm />
        </div>
    )
}

export default WelcomePage