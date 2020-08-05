import React from 'react';
import { Link } from 'react-router-dom'
import './Product.css'

const getPlaceBidButton = (user, id, hindi) => {
    if (user) {
        if (user.isBuyer) {
            return (
                <Link to={`/product/${id}`}>
                    <button> {!hindi ? "Place Bid" : "बोली लगाए"}</button>
                </Link>
            )
        }
    }
}


const Product = ({ product, user, hindi }) => {
    return (
        <div className="col-md-4 col-xl-3 my-5">
            <div id="product__card" className="container">
                <div className="card">
                    <div className="photo">
                        <img
                            className="product__img"
                            src={`${process.env.REACT_APP_API_URL}/api/product/image/${product.imageId}`}
                        />
                    </div>
                    <div className="description pl-4">
                        <h2>{product.name}</h2>
                        <h3 id="product-bid">{!hindi ? "Total Bids Placed : " : "कुल बोल लगाए गए : "}{product.bidders.length}</h3>
                        <h1>{hindi ? "आधार मूल्य" : "Base Price"}: &#8377; {product.basePrice}</h1>
                        <p>
                            {product.description}
                        </p>
                        {getPlaceBidButton(user, product._id, hindi)}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
