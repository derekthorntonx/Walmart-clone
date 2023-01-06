function Product() {
    return(
        <div className="product-container">
            <img src="https://i5.walmartimages.ca/images/Thumbnails/844/949/6000204844949.jpg" loading="lazy" alt='product'/>
            <div style={{margin: '5% 7%', height: '50px', overflow: 'hidden'}}>ASUS TUF Gaming A17 (2022) Gaming Laptop</div>
            <div>****</div>
            <div style={{fontWeight: '500'}}>$1609.99</div>
            <div>Stock</div>
            <button className="add-to-cart-button">Add to cart</button>
        </div>
    )
}

export default Product;