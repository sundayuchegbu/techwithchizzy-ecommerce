import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./ProductItem.css"; // Create this CSS file

const ProductItem = ({ product, columnSize }) => {
  return (
    <div className={`product-item col-${columnSize}`}>
      <div className="product-card">
        <div className="product-image-container">
          <img
            className="product-image"
            src={
              product?.images[0]?.url
                ? product?.images[0]?.url
                : "/images/default_product.png"
            }
            alt={product?.name}
            loading="lazy"
          />
        </div>

        <div className="product-details">
          <h5 className="product-title">
            <Link to={`/product/${product?._id}`}>{product?.name}</Link>
          </h5>

          <div className="product-ratings">
            <StarRatings
              rating={product?.ratings}
              starRatedColor="#ffb829"
              numberOfStars={5}
              name="rating"
              starDimension="18px"
              starSpacing="0px"
            />
            <span className="review-count">({product?.numOfReviews})</span>
          </div>

          <p className="product-price">${product?.price}</p>

          <Link to={`/product/${product?._id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
