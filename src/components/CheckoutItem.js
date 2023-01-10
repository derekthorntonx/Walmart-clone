import { CartState } from '../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function CheckoutItem( {product} ) {
    const { state: {cart}, dispatch } = CartState();

    return(
        <div className="checkout-item">
            <img src={product.image} alt='product'/>
            <div>{product.name}</div>
            <div>${product.price}</div>
            <form>
            <label htmlFor="itemQuantity" style={{marginRight: '3px'}}>Quantity</label>
            <select name="quantity" id="quantity" onChange={(e) => {
                dispatch({
                    type: 'CHANGE_QTY',
                    payload: {name: product.name,
                              qty: e.target.value}
                })}
            }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </form>
            <FontAwesomeIcon onClick={() => {dispatch({
                type: 'REMOVE_PRODUCT',
                payload: product
            })}} className='fa-xl' style={{cursor: 'pointer'}} icon={faTrashCan}/>
        </div>
    )
}

export default CheckoutItem;