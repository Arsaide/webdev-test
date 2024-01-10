'use client'
import React, {useState} from 'react';
import {GoodsCard} from "@/components/pages/main-page/goods/subcomponents/goods-card/GoodsCard";
import useData from "@/hooks/use-data/UseData";

function SearchPanel() {
    const { products, categories } = useData();
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
    }

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products

    return (
        <>
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

            {filteredProducts.map(item => (
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
            ))}
        </>
    );
}

export default SearchPanel;