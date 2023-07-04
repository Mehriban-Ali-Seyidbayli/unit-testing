import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Scoops = () => {

    const [types, setTypes] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart);

    useEffect(() => {
        axios.get("http://localhost:3004/types")
            .then((res) => setTypes(res.data))
            .catch((err) => console.log(err))
    }, [])

    const handleReset = (type) => {
        const filteredItem = cart.filter((item) => item.name !== type.name)
        setCart(filteredItem)
    }

    const itemAmount = (type) => {
        const findAmount = cart.filter((item) => item.name === type.name)
        return findAmount.length

    }

    return (
        <div className='container'>
            <h1>Types</h1>
            <p>3$</p>
            <h2 data-testid="price">Types Price: {cart.length * 3} $ </h2>
            <div className='row d-flex gap-4'>
                {
                    types.map((type) => {
                        const amount = itemAmount(type);
                        return (
                            <div className='col-3 d-flex flex-column align-items-center mx-5' style={{ maxWidth: "200px" }}>
                                <img id={type.name} className='w-100' src={type.imagePath} alt='type' />
                                <label htmlFor={type.name}>{type.name}</label>
                                <div className='d-flex gap-3 my-3'>
                                    <button onClick={() => handleReset(type)} className='btn btn-danger'>Reset</button>
                                    <span className='lead'>{amount}</span>
                                    <button
                                        className='btn btn-warning'
                                        id={type.name}
                                        onClick={() => setCart([...cart, type])}
                                    >Add</button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Scoops