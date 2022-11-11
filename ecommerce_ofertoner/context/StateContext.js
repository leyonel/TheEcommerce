import React, { createContext, useContext, useState, useEffect} from 'react';
import { Toast } from 'react-hot-toast';

const Context = createContext();



export const StatrContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);

    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalCantidades, setTotalCantidades] = useState();
    const [qty, setQty] = useState(1);

    return (
        <Context.Provider
            value= {{
                showCart,
                cartItems,
                totalPrice,
                totalCantidades,
                qty
            }}
        >
            {children}
        </Context.Provider>
    )
}