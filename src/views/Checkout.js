import { CartState } from '../context/Context';
import CheckoutItem from '../components/CheckoutItem';
import { useEffect, useState } from 'react';


function Checkout() {
    const { state:{cart} } = CartState();
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => { 
        let totalCost = 0;
        cart.forEach((item) => {
        totalCost += (item.price * item.qty)
        })
        console.log(totalCost)
        setTotalPrice(totalCost)
    },[cart])
    

    return(
        <div className="checkout-page">
            <div>
                {cart.map((product) => <CheckoutItem key={product.name} product={product}/>)}
            </div>
            <div className='price-info'>
                <div style={{margin: '5% 0', borderBottom: '1px solid gray', display: 'flex', justifyContent: 'space-between'}}>
                    <div>Subtotal</div><div>${totalPrice}</div>
                    </div>
                    <ul>
                        {cart.map((item, index) => 
                            <li key={index} style={{display: 'grid', gridTemplateColumns: '3fr 1fr 2fr 1fr 3fr', placeItems:'center'}}><div>${item.price}</div>x<div>{item.qty}</div>=<div>${item.price*item.qty}</div></li>
                        )}
                        <li style={{listStyle: 'none'}}>+ applicable taxes</li>
                    </ul>
                <div style={{margin: '5% 0', borderBottom: '1px dotted gray', display: 'flex', justifyContent: 'space-between'}}>
                    <div>Estimated Total</div><div>${Math.round((totalPrice*1.13) * 10) / 10}</div>
                    </div>
                <button>Proceed to checkout</button>
            <div className='checkout-buttons'>
                <button>test</button>
                <button>test2</button>
            </div>
            </div>
        </div>
    )
}

export default Checkout;