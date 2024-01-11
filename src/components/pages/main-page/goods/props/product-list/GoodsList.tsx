import React from 'react';
import { GoodsCard } from '@/components/pages/main-page/goods/props/goods-card/GoodsCard';
import { Product } from "@/app/api/dataService";

type Props = {
    products: Product[];
};

const GoodsList = ({ products }: Props) => (
    <>
        {products.length > 0 ? (
            products.map((item) => (
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
        ) : (
            <p>No Result</p>
        )}
    </>
);

export default GoodsList;