'use client'
import {fetchData, Product} from "../api/dataService";
import React, {useEffect, useState} from 'react';
import {Paper} from "@mui/material";
import {Container} from "@mui/system";
import styles from './page.module.scss'
import Link from "next/link";
import ProductInfo from "@/components/pages/[id]/product-info/ProductInfo";
import ProductImg from "@/components/pages/[id]/product-img/ProductImg";
import ProductSkeleton from "@/components/pages/[id]/product-skeleton/ProductSkeleton";

type Props = {
    params: {
        id: number
    }
};

const ProductDetails: React.FC<Props> = ({params: {id}}) => {
    const [item, setItem] = useState<Product | null>(null);
    useEffect(() => {
        const fetchDataAsync = async () => {
            const data = await fetchData();
            const foundProduct = data.products.find(product => product.id === +id);
            setItem(foundProduct || null);
        };
        fetchDataAsync();
    }, [id]);

    if (!item) {
        return (
            <ProductSkeleton/>
        )
    }

    return (
        <Paper sx={{padding: 3, marginBottom: 2}}>
            <Container>
                <Link className={styles.link} href={'/'}>Come back →</Link>
                <ProductInfo item={item}/>
                <ProductImg item={item}/>
            </Container>
        </Paper>
    );
};

export default ProductDetails;
