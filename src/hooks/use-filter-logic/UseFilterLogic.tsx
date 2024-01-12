import React, { useEffect } from 'react';
import useData from '@/hooks/use-data/UseData';
import usePagination from "@/hooks/use-pagination/UsePagination";

const useFilterLogic = (
    searchQuery: string,
    selectedCategory: string,
    // Типизации функции стейта
    // Она принимает строку или функцию которая возвращающает строку
    // Помогает предотвратить ошибки типизации со стейтом
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
    ) => {

    const { getFilteredProducts, getSearchResults } = useData();
    const { currentPage, setCurrentPage } = usePagination();

    // Смена состояния категории
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Сбрасываем страницу при изменении категории
    };

    // Сбрас категории и страницы при вводе в поиск
    useEffect(() => {
        if (searchQuery !== '') {
            setSelectedCategory('');
            setCurrentPage(1); // Сбрасываем страницу при вводе в поиск
        }
    }, [searchQuery, setSelectedCategory, setCurrentPage]);

    // Проверка на пустую строку
    const filteredProducts =
        searchQuery !== '' ? getSearchResults(searchQuery) : getFilteredProducts(selectedCategory);

    return {
        handleCategoryChange,
        filteredProducts,
    };
};

export default useFilterLogic;
