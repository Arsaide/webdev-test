import React from 'react';
import { Container } from "@mui/material";
import Image from "next/image";
import styles from '../../../../app/[id]/page.module.scss';
import {Product} from "@/app/api/dataService";
import Typography from "@mui/material/Typography";

type ProductImagesProps = {
    item: Product;
};

const ProductImages: React.FC<ProductImagesProps> = ({ item }) => {
    return (
        <Container>
            <Typography variant={"h5"} sx={{ mb: 1 }}>Images:</Typography>
            <div className={styles.imgCnt}>
                {item.images.map((image, index) => (
                    <Image
                        className={styles.img}
                        key={index} src={image}
                        alt={item.description}
                        width={300}
                        height={250}
                        loading={'lazy'}
                    />
                ))}
            </div>
        </Container>
    );
};

export default ProductImages;