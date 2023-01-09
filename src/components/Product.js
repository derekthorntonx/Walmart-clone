function Product( {product} ) {

    return(
        <div className="product-container">
            <img src={product.image} loading="lazy" alt='Product'/>
            <div style={{margin: '5% 7%', height: '55px', overflow: 'hidden'}}>{product.name}</div>
            <div>fix me {product.rating}*s</div>
            <div style={{fontWeight: '500'}}>${product.price}</div>
            <button className="add-to-cart-button">Add to cart</button>
        </div>
    )
}

export default Product;