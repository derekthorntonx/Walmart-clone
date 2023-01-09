function ProductDetails( {product, handleClick} ) {
    return(
        <div className="product-details">
            <img src={product.image} alt='product'/>
            <button onClick={handleClick}>Back</button>
            {product.description}
            </div>
    )
}

export default ProductDetails;