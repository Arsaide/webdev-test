import React, { useState } from 'react';
import { Product } from "@/app/api/dataService";

interface PaginationHook {
    currentPage: number // Текущая страница
    productsPerPage: number // Колво продуктов
    getCurrentProducts: (products: Product[]) => Product[] // Получения текущих продуктов
    handlePageChange: (e: React.ChangeEvent<unknown>, page: number) => void // Обработчик пагинации
    setProductsPerPage: React.Dispatch<React.SetStateAction<number>> // Изменение продуктов
    setCurrentPage: React.Dispatch<React.SetStateAction<number>> // Изменение страници
}

const usePagination = (initProducts: number = 9): PaginationHook => {
    // Хранение данніх страници и продуктов
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(initProducts)

    const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    // Продуктов которіе будут рендерится
    const getCurrentProducts = (products: Product[]) => {
        const lastProduct = currentPage * productsPerPage,
            firstProduct = lastProduct - productsPerPage
        return products.slice(firstProduct, lastProduct)
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