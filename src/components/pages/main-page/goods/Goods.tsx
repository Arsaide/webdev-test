'use client'
import React, {useEffect, useState} from 'react';
import {GoodsCard} from "@/components/pages/main-page/goods/subcomponents/goods-card/GoodsCard";
import useData from "@/hooks/use-data/UseData";

const Goods = () => {
    const { products } = useData()

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
