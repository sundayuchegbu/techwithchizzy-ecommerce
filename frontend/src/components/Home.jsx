import React from "react";
import MetaData from "./layouts/MetaData";
import { useGetProductsQuery } from "../redux/api/productApi";
import ProductItem from "./product/ProductItem";
import Loader from "./layouts/Loader";
import CustomPagination from "./layouts/CustomPagination";
import { useSearchParams } from "react-router-dom";
import Filters from "./layouts/Filters";

const Home = () => {
  let [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const keyword = searchParams.get("keyword") || "";
  const min = searchParams.get("min");
  const max = searchParams.get("max");
  const category = searchParams.get("category");
  const ratings = searchParams.get("ratings");

  const params = { page, keyword };

  min !== null && (params.min = min);
  max !== null && (params.max = max);
  category !== null && (params.category = category);
  ratings !== null && (params.ratings = ratings);

  const { data, isLoading } = useGetProductsQuery(params);

  if (isLoading) return <Loader />;

  return (
    <>
      <MetaData title={"Buy best product online"} />
      <div className="container-fluid">
        <div className="row">
          {keyword && (
            <div className="col-12 col-md-3 col-lg-2 mt-3 mt-md-5">
              <Filters />
            </div>
          )}
          <div className={keyword ? "col-12 col-md-9 col-lg-10" : "col-12"}>
            <h1 id="products_heading" className="text-secondary px-3 px-md-0">
              {keyword
                ? `${data?.products?.length} Products found with keyword: ${keyword}`
                : "Latest Products"}
            </h1>

            <section id="products" className="mt-3 mt-md-5 px-2 px-md-0">
              <div className="row g-3 g-md-4">
                {data?.products?.map((product) => (
                  <ProductItem key={product._id} product={product} />
                ))}
              </div>
            </section>

            <div className="mt-4">
              <CustomPagination
                resPerPage={data?.resPerPage}
                filterProductsCount={data?.filterProductsCount}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
