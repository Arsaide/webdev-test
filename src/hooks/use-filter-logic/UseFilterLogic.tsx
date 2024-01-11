import React, { useEffect } from 'react';
import useData from '@/hooks/use-data/UseData';

const useFilterLogic = (
    searchQuery: string,
    selectedCategory: string,

    // Типизации функции стейта
    // Она принимает строку или функцию которая возвращающает строку
    // Помогает предотвратить ошибки типизации со стейтом
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
    ) => {

    const { getFilteredProducts, getSearchResults } = useData();

    // Смена состояния категории
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };


    // Сбрас категории при вводе в поиск
    useEffect(() => {
        if (searchQuery !== '') {
            setSelectedCategory('');
        }
    }, [searchQuery, setSelectedCategory]);

    // Проверка на пустую строку
    const filteredProducts =
        searchQuery !== '' ? getSearchResults(searchQuery) : getFilteredProducts(selectedCategory);

    return {
        handleCategoryChange,
        filteredProducts,
    };
};


export default useFilterLogic;