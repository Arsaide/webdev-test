import React, { useState } from 'react';
import { Product } from "@/app/api/dataService";

interface PaginationHook {
    currentPage: number;
    productsPerPage: number;
    getCurrentProducts: (products: Product[]) => Product[];
    handlePageChange: (e: React.ChangeEvent<unknown>, page: number) => void;
    setProductsPerPage: React.Dispatch<React.SetStateAction<number>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const usePagination = (initProducts: number = 9): PaginationHook => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(initProducts);

    const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const getCurrentProducts = (products: Product[]) => {
        const lastProduct = currentPage * productsPerPage,
            firstProduct = lastProduct - productsPerPage;
        return products.slice(firstProduct, lastProduct);
    };

    return {
        currentPage,
        setCurrentPage,
        handlePageChange,
        getCurrentProducts,
        productsPerPage,
        setProductsPerPage,
    };
};

export default usePagination;