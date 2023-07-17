import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss"


const Pagination = ({onChangePage}) => {
    return (
        <div>
            <ReactPaginate
                className={styles.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={8}
                pageCount={4}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>

    )
}
export default Pagination;