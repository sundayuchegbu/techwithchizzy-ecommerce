import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';

const CustomPagination = ({ resPerPage, filterProductsCount }) => {
  const [currentPage, setCurrentPage] = useState();
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);

    if (searchParams.has('page')) {
      searchParams.set('page', pageNumber);
    } else {
      searchParams.append('page', pageNumber);
    }
    const path = window.location.pathname + '?' + searchParams.toString();
    navigate(path);
  };

  return (
    <div className="d-flex justify-content-center my-5">
      {filterProductsCount > resPerPage && (
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resPerPage}
          totalItemsCount={filterProductsCount}
          onChange={setCurrentPageNo}
          nextPageText={'Next'}
          prevPageText={'Prev'}
          firstPageText={'First'}
          lastPageText={'Last'}
          itemClass="page-item"
          linkClass="page-link"
        />
      )}
    </div>
  );
};

export default CustomPagination;
