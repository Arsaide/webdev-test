'use client'
import React, {useState} from 'react';
import {GoodsCard} from "@/components/pages/main-page/goods/GoodsCard";
import useData from "@/hooks/use-data/UseData";

function FilterPanel() {
    const {
        categories,
        selectedCategory,
        setSelectedCategory,
        getFilteredProducts,
        searchQuery,
        handleSearchChange,
        getSearchResults, } = useData()

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
    }

    const filteredProducts =
        searchQuery !== '' ? getSearchResults() : getFilteredProducts();

    return (
        <>
            {/*Filter*/}
            <div>
                <label>Filtered by category</label>
                <select
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    value={selectedCategory}>
                    <option value={""}>All Categories</option>
                    {categories.map((category, id) => (
                        <option key={id} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/*Search*/}
            <div>
                <label>Search</label>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder={'Searchin panel'}/>
            </div>

            {/*Render*/}
            {filteredProducts.length > 0 ? (
                filteredProducts.map(item => (
                    <GoodsCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        discountPercentage={item.discountPercentage}
                        rating={item.rating}
                        brand={item.brand}
                        category={item.category}
                        images={item.images}
                    />
                ))
            ): (
                <p>No Result</p>
            )}
        </>
    );
}

export default FilterPanel;