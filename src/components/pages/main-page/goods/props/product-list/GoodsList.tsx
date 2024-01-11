import React from 'react';
import { GoodsCard } from '@/components/pages/main-page/goods/props/goods-card/GoodsCard';
import { Product } from "@/app/api/dataService";
import {Grid} from "@mui/material";

type Props = {
    products: Product[];
};

const GoodsList = ({ products }: Props) => (
    <>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 6, md: 12 }}>
            {products.length > 0 ? (
                products.map((item) => (
                    <Grid item xs={2} sm={3} md={4} key={item.id}>
                        <GoodsCard
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
                    </Grid>

                ))
            ) : (
                <p>No Result</p>
            )}
        </Grid>
    </>
);

export default GoodsList;