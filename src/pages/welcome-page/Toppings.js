import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Toppings = () => {
    const [sauces, setSauces] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3004/sauces")
            .then((res) => setSauces(res.data))
            .catch((err) => console.log(err))
    }, [])

    const handleAddSauce = (e, sauce) => {
        if (e.target.checked) {
            setCart([...cart, sauce]);

        } else {
            const filteredCart = cart.filter((item) => item.name !== sauce.name)
            setCart(filteredCart);
        }

    }

    return (
        <div className='container'>
            <h1>Sauces</h1>
            <p>2$</p>
            <h2 data-testid="price">Price: {cart.length * 2} $</h2>
            <div className='container row d-flex gap-4'>
                {
                    sauces.map((sauce) => (
                        <div className='col-3 d-flex flex-column align-items-center justify-content-between mx-5 ' style={{ width: "200px", minHeight: "200px" }}>
                            <img src={sauce.imagePath} className='w-100' />
                            <label className='my-3' htmlFor={sauce.name}>{sauce.name}</label>
                            <input
                                id={sauce.name}
                                type='checkbox'
                                style={{ width: "20px", height: "20px" }}
                                onChange={(e) => handleAddSauce(e, sauce)}
                            />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Toppings