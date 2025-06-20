import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
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
    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 mb-4">
      <div className="card h-100 product-card">
        <Link to={`/product/${_id}`} className="text-decoration-none">
          <div className="product-image-container">
            <img
              src={imageUrl}
              className="card-img-top p-2"
              alt={name}
              loading="lazy"
              style={{
                height: "180px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-truncate">{name}</h5>
            <div className="mt-auto">
              <div className="d-flex align-items-center mb-2">
                <StarRatings
                  rating={ratings}
                  starRatedColor="#ffb829"
                  numberOfStars={5}
                  name="rating"
                  starDimension="16px"
                  starSpacing="0px"
                />
                <span className="text-muted ms-2 small">({numOfReviews})</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold h5">${price}</span>
                <span className="btn btn-sm btn-outline-primary">
                  View Details
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
