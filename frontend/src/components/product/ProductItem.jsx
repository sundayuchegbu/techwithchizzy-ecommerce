import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./ProductItem.css";

const ProductItem = ({ product, columnSize }) => {
  const {
    _id,
    name,
    price,
    ratings = 0,
    numOfReviews = 0,
    images = [],
  } = product || {};

  const imageUrl = images[0]?.url || "/images/default_product.png";

  return (
    <div className={`product-item col-${columnSize}`}>
      <div className="product-card">
        <div className="product-image-container">
          <img
            className="product-image"
            src={imageUrl}
            alt={name || "Product"}
            loading="lazy"
          />
        </div>

        <div className="product-details">
          <h5 className="product-title">
            <Link to={`/product/${_id}`}>{name}</Link>
          </h5>

          <div className="product-ratings">
            <StarRatings
              rating={ratings}
              starRatedColor="#ffb829"
              numberOfStars={5}
              name="rating"
              starDimension="18px"
              starSpacing="0px"
            />
            <span className="review-count">({numOfReviews})</span>
          </div>

          <p className="product-price">${price}</p>

          <Link to={`/product/${_id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
