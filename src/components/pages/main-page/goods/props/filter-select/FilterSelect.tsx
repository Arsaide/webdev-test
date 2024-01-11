import React from 'react';

type Props = {
    categories: string[];
    selectedCategory: string;
    handleCategoryChange: (category: string) => void;
};

const FilterSelect = ({categories, selectedCategory, handleCategoryChange}:Props ) => (
    <div>
        <label>Filtered by category</label>
        <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory}>
            <option value={''}>All Categories</option>
            {categories.map((category, id) => (
                <option key={id} value={category}>
                    {category}
                </option>
            ))}
        </select>
    </div>
);

export default FilterSelect;