'use client'
import {fetchData, Product} from "../api/dataService";
import React, {useEffect, useState} from 'react';
import {CardMedia, Paper, Rating, Skeleton} from "@mui/material";
import {Container} from "@mui/system";
import Typography from "@mui/material/Typography";
import styles from './page.module.scss'
import Image from "next/image";
import Link from "next/link";
import CardActions from "@mui/material/CardActions";
import {CardActionsStyle} from "@/components/pages/main-page/goods/props/goods-card/GoodsCard.styles";
import Button from "@mui/material/Button";

type Props = {
    params: {
        id: number
    }
};

const ProductDetails: React.FC<Props> = ({params: {id}}) => {
    const [item, setItem] = useState<Product | null>(null);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const data = await fetchData();
                const foundProduct = data.products.find(product => product.id === +id);
                setItem(foundProduct || null);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDataAsync();
    }, [id]);

    if (!item) {
        // return <Loading/>;
        return (
            <Paper sx={{padding: 3, marginBottom: 2}}>
                <Skeleton variant={'rectangular'} width={210} height={118}/>
            </Paper>
        )
    }

    return (
        <Paper sx={{padding: 3, marginBottom: 2}}>
            <Container>
                <Link className={styles.link} href={'/'}>Come back →</Link>
                <Typography variant={'h4'} sx={{mt: 2}}>{item.title}</Typography>
                <Typography variant={"subtitle1"}>{item.description}</Typography>
                <Typography variant={"subtitle1"} className={styles.price}>
                    New Price: <span className={styles.red}>
                            {Math.round(item.price * (item.discountPercentage / 100) * 10) / 10}$
                           </span>! <br/>
                    OldPrice: <span style={{opacity: 0.9}}><s>{item.price} $</s></span>
                </Typography>
                <Button size="medium"
                        variant="contained">
                    Buy!
                </Button>
                <Typography variant="subtitle1" sx={{fontSize: "19px", mt: 1}}>
                    Rating:
                </Typography>
                <Rating
                    name="read-only"
                    value={item.rating}
                    precision={0.2}
                    readOnly
                    sx={{mb: 3}}/>
                <Typography variant={"h5"} sx={{mb: 1}}>Images:</Typography>
                <div className={styles.imgCnt}>
                    {item.images.map((image, index) => (
                        <Image
                            className={styles.img}
                            key={index} src={image}
                            alt={item.description}
                            width={300}
                            height={250}
                            loading={'lazy'}/>
                    ))}
                </div>
            </Container>
        </Paper>
    );
};

export default ProductDetails;
