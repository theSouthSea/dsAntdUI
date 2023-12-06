import { useEffect, useState } from "react";

type UsePaginationProps = {
    totalPages: number;
    initialPage: number;
    pageNumbersCount: number;
};
export const usePagination = ({
    totalPages,
    initialPage,
    pageNumbersCount,
}:UsePaginationProps) => {
    const [activePage, setActivePage] = useState(initialPage);
    const [hasNextPage, setHasNextPage] = useState(initialPage < pageNumbersCount);
    const [hasPreviousPage, setHasPreviousPage] = useState(initialPage > 1);
    const handlePageChange = (activePage: number) => {
        setActivePage(activePage);
    };
    const setNextPageActive = () => {
        if (activePage < totalPages) {
            setActivePage(activePage + 1);
        }
    };
    const setPreviousPageActive = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1);
        }
    };
    const pageNumbers = [1,2,3,4,5];
    useEffect(() => {
        if(activePage < pageNumbersCount){
            setHasNextPage(true)
        }else {
            setHasNextPage(false)
        }
        if(1 < activePage){
            setHasPreviousPage(true)
        }else{
            setHasPreviousPage(false)
        }
    },[activePage])

    return {
        activePage,
        pageNumbers,
        hasNextPage,
        hasPreviousPage,
        handlePageChange,
        setPreviousPageActive,
        setNextPageActive,
    }
}
