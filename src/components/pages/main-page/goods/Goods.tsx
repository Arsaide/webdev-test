'use client'
import React, {useEffect, useState} from 'react';
import {fetchData} from '@/components/pages/api/dataService';
import {GoodsCard} from "@/components/pages/main-page/goods/subcomponents/goods-card/GoodsCard";

const Goods = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await fetchData();
                setProducts(data.products);
                console.log(data)
            } catch (error) {
                console.error('Error fetch data:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            {products.map(item => (
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
                    images={item.images}/>
            ))}
        </>
    );
};

export default Goods;
