import React from 'react';
import { GoodsCard } from '@/components/pages/main-page/goods/props/goods-card/GoodsCard';
import { Product } from "@/app/api/dataService";
import { Grid, Pagination, Stack } from '@mui/material';
import usePagination from "@/hooks/use-pagination/UsePagination";
import {GoodsListPaginationBottom, GoodsListPaginationTop} from './GoodsList.styles';

type Props = {
    products: Product[];
};

const GoodsList = ({ products }: Props) => {
    const { currentPage, handlePageChange, getCurrentProducts, productsPerPage } = usePagination();
    const currentProducts = getCurrentProducts(products);

    // @ts-ignore
    return (
        <>
            <div style={{display: "flex",
                        flexDirection: "column",
                        alignItems: "center"}}>
                <Stack spacing={2} sx={GoodsListPaginationTop}>
                    <Pagination
                        count={Math.ceil(products.length / productsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Stack>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 3, sm: 6, md: 12}} sx={{justifyContent: "center"}}>
                    {currentProducts.length > 0 ? (
                        currentProducts.map((item) => (
                            <Grid item xs={4} sm={3} md={4} key={item.id}>
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
                <Stack spacing={2} sx={GoodsListPaginationBottom}>
                    <Pagination
                        count={Math.ceil(products.length / productsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Stack>
            </div>
        </>
    );
};

export default GoodsList;
