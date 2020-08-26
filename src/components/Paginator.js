import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
    
    return (
        <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={41}
            marginPagesDisplayed={3}
            pageRangeDisplayed={2}
            onPageChange={props.pageClickHandler}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
    )
}

export default Pagination;