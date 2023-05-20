import React from 'react';
import { useRouter } from 'next/router'; 

const OrderItem = () => {
    const { query : { id }} = useRouter()

    return (
        <div>
            <h1> Esta es la página del Producto {id}</h1>
        </div>
    );
}

export default OrderItem;