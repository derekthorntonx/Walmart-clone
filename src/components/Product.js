import { useState } from 'react'
import ProductDetails from '../views/ProductDetails'
import { CartState } from '../context/Context';
import StarCount from '../components/StarCount';

function Product( {product} ) {
    const [showProductDetails, setShowProductDetails] = useState(false);
    const { state: {cart}, dispatch } = CartState();

    function handleClick(){
        setShowProductDetails(!showProductDetails);
    }

    return(
        <>
        <div className="product-container">
            <img onClick={handleClick} src={product.image} loading="lazy" alt='Product'/>
            <div onClick={handleClick} style={{margin: '5% 7%', height: '55px', overflow: 'hidden'}}>{product.name}</div>
            <StarCount product={product}/>
            <div onClick={handleClick} style={{fontWeight: '500'}}>${product.price}</div>
            <button onClick={() => {
                dispatch({
                    type: 'ADD_PRODUCT',
                    payload: product
                })
            }}className="add-to-cart-button">Add to cart</button>
        </div>
        {showProductDetails ? <ProductDetails product={product} handleClick={handleClick}/> : null}
        </>
    )
}

export default Product;