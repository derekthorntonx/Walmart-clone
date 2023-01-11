import { CartState } from '../context/Context';
import CheckoutItem from '../components/CheckoutItem';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


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
            {cart.length !== 0 ? <div>{cart.map((product) => <CheckoutItem key={product.name} product={product}/>)}</div> :
             <div className='empty-cart'>
                <FontAwesomeIcon icon={faShoppingCart} className='fa-2xl'/>
                <div>Shopping cart is empty!</div>
                <Link to='/' className='link-home' style={{display: 'flex', placeItems: 'center', fontSize: '1rem'}}>Start Shopping</Link>
             </div>}
            <div className='price-info'>
                <div style={{margin: '5% 0', borderBottom: '1px solid gray', display: 'flex', justifyContent: 'space-between'}}>
                    <div>Subtotal</div><div>${totalPrice}</div>
                    </div>
                    <ul>
                        {cart.map((item, index) => 
                            <li key={index} style={{display: 'grid', gridTemplateColumns: '3fr 1fr 2fr 1fr 3fr', justifyContent:'center'}}><div style={{textAlign: 'left'}}>${item.price}</div>x<div>{item.qty}</div>=<div>${item.price*item.qty}</div></li>
                        )}
                        {cart.length !== 0 ? <li style={{listStyle: 'none', textAlign: 'center'}}>+ applicable taxes</li> : null}
                    </ul>
                <div style={{margin: '5% 0', borderBottom: '1px dotted gray', display: 'flex', justifyContent: 'space-between'}}>
                    <div>Estimated Total</div><div>${Math.round((totalPrice*1.13) * 10) / 10}</div>
                    </div>
                <button className='add-to-cart-button' disabled={cart.length === 0}>Proceed to checkout</button>
            <div className='checkout-buttons'>
                {cart.length !== 0 ? <Link to='/' className='link-home'>Continue Shopping</Link> : null}
            </div>
            </div>
        </div>
    )
}

export default Checkout;