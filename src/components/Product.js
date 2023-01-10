import { CartState } from '../context/Context';
import StarCount from '../components/StarCount';


function Product( {product} ) {
    const { state:{cart}, dispatch } = CartState();

    return(
        <>
        <div className="product-container">
            <img src={product.image} loading="lazy" alt='Product'/>
            <div style={{margin: '5% 7%', height: '55px', overflow: 'hidden'}}>{product.name}</div>
            <StarCount product={product}/>
            <div style={{fontWeight: '500'}}>${product.price}</div>
            <button onClick={() => {
                dispatch({
                    type: 'ADD_PRODUCT',
                    payload: product
                })
            }}className="add-to-cart-button" disabled={cart.some((item) => item.name === product.name)}>Add to cart</button>
            {cart.some((item) => item.name === product.name) ? <button onClick={() => {
                dispatch({
                    type: 'REMOVE_PRODUCT',
                    payload: product
                })
            }}>Remove</button> : null}
        </div>
        </>
    )
}

export default Product;