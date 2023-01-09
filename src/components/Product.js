import { useState } from 'react'
import ProductDetails from '../views/ProductDetails'

function Product( {product} ) {
    const [showProductDetails, setShowProductDetails] = useState(false);

    function handleClick(){
        setShowProductDetails(!showProductDetails);
    }

    return(
        <>
        <div className="product-container">
            <img onClick={handleClick} src={product.image} loading="lazy" alt='Product'/>
            <div onClick={handleClick} style={{margin: '5% 7%', height: '55px', overflow: 'hidden'}}>{product.name}</div>
            <div>fix me {product.rating}*s</div>
            <div onClick={handleClick} style={{fontWeight: '500'}}>${product.price}</div>
            <button className="add-to-cart-button">Add to cart</button>
        </div>
        {showProductDetails ? <ProductDetails product={product} handleClick={handleClick}/> : null}
        </>
    )
}

export default Product;