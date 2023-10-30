import React, {useContext} from "react";
import ReactPaginate from "react-paginate";
import {GameContext} from "../context/GameContext";
import {Pagination} from "react-bootstrap";

interface PaginationProps {
}

export const PaginationComp: React.FC<PaginationProps> = () => {
    return (
        <Pagination>
            <Pagination.Prev />
            <Pagination.Next />
        </Pagination>
    );
}