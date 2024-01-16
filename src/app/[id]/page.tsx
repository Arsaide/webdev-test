'use client'
import {fetchData, Product} from "../api/dataService";
import React, { useEffect, useState } from 'react';
import Loading from "@/components/common/ui/loading/Loading";
import {CardMedia, Paper} from "@mui/material";
import {Container} from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";

type Props = {
    params: {
        id: number
    }
};

// ... (ваш импорт)

const ProductDetails: React.FC<Props> = ({ params: { id } }) => {
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
        return <Loading/>;
    }

    return (
        <Paper>
            <Container>
                <Typography variant={'h4'}>Title: {item.title}</Typography>
                <p>Description: {item.description}</p>
                {item.images.map((image, index) => (
                    // <Image key={index} src={image} width={300} height={300} alt={`Image ${index + 1}`} />
                    <CardMedia key={index} image={image} title={item.description} sx={{ maxWidth: 345, height: 250 ,}}/>
                ))}
            </Container>
            <CardMedia/>
        </Paper>
    );
};

export default ProductDetails;
