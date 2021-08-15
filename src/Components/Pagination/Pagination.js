import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import './Pagination.scss'
Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,

};
Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);
    const handleOnPageChange = (newpage) => {
        if (onPageChange) {
            onPageChange(newpage.selected)
        }
    }
    return (
        <div className="pagination-box">
            {/* <button
                className="pagination-btn"
                disabled={_page <= 1}
                onClick={() => handleOnPageChange(_page - 1)} >
                Prev
            </button>
            <button
                className="pagination-btn"
                disabled={_page >= totalPages}
                onClick={() => handleOnPageChange(_page + 1)} >
                Next
            </button> */}
            <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                // breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={totalPages}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handleOnPageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div >
    );
}

export default Pagination;