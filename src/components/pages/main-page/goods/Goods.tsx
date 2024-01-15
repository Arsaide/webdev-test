'use client'
import React, {useEffect, useState} from 'react';
import useData from "@/hooks/use-data/UseData";
import useFilterLogic from "@/hooks/use-filter-logic/UseFilterLogic";
import FilterSelect from "@/components/pages/main-page/goods/filter-select/FilterSelect";
import SearchInput from "@/components/pages/main-page/goods/search-input/SearchInput";
import GoodsList from "@/components/pages/main-page/goods/product-list/GoodsList";

const Goods = () => {
    const {
        categories,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        handleSearchChange
    } = useData();

    const {handleCategoryChange, filteredProducts} = useFilterLogic(
        searchQuery,
        selectedCategory,
        setSelectedCategory
    );

    return (
        <>
            {/* Фильтрация */}
            <FilterSelect
                categories={categories}
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
            />

            {/* Поиск */}
            <SearchInput value={searchQuery} handleSearchChange={handleSearchChange}/>

            {/* Рендер */}
            <GoodsList products={filteredProducts}/>
        </>
    );
};

export default Goods;