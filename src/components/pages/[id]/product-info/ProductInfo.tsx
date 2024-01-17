import React from 'react';
import { Container, Typography, Button, Rating } from "@mui/material";
import styles from '../../../../app/[id]/page.module.scss';
import {Product} from "@/app/api/dataService";

type ProductInfoProps = {
    item: Product;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ item }) => {
    return (
        <>
            <Typography variant={'h4'} sx={{ mt: 2 }}>{item.title}</Typography>
            <Typography variant={"subtitle1"}>{item.description}</Typography>
            <Typography variant={"subtitle1"} className={styles.price}>
                New Price: <span className={styles.red}>
                {Math.round(item.price * (item.discountPercentage / 100) * 10) / 10}$
                </span>! <br />
                Old Price: <span style={{ opacity: 0.9 }}><s>{item.price} $</s></span>
            </Typography>
            <Button size="medium" variant="contained">
                Buy!
            </Button>
            <Typography variant="subtitle1" sx={{ fontSize: "19px", mt: 1 }}>
                Rating:
            </Typography>
            <Rating
                name="read-only"
                value={item.rating}
                precision={0.2}
                readOnly
                sx={{ mb: 3 }}
            />
        </>
    );
};

export default ProductInfo;