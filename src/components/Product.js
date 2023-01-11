import { CartState } from '../context/Context';
import StarCount from '../components/StarCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function Product( {product} ) {
    const { state:{cart}, dispatch } = CartState();

    return(
        <>
        <div className="product-container">
            <img src={product.image} loading="lazy" alt='Product'/>
            <div style={{margin: '5% 7%', overflow: 'hidden'}}>{product.name}</div>
            <StarCount product={product}/>
            <div style={{fontWeight: '500'}}>${product.price}</div>
            <div><button onClick={() => {
                dispatch({
                    type: 'ADD_PRODUCT',
                    payload: product
                })
            }}className="add-to-cart-button" disabled={cart.some((item) => item.name === product.name)}>Add to cart</button>
            {cart.some((item) => item.name === product.name) ? <FontAwesomeIcon style={{cursor: 'pointer', marginLeft:'10px'}} className='fa-xl' icon={faTrashCan} onClick={() => {
                dispatch({
                    type: 'REMOVE_PRODUCT',
                    payload: product
                })
            }}/> : null}
            </div>
        </div>
        </>
    )
}

export default Product;