import React from 'react';
import Link from "next/link";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardActionsStyle, GoodsCardStyle, ImgCardStyle} from './GoodsCard.styles';


type Props = {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "brand": string,
    "category": string,
    "images": string[]
}

export const GoodsCard = ({id, title, description, price, discountPercentage, rating, brand, category, images}: Props) => {

    return (
        <>
            <Card sx={GoodsCardStyle} key={id}>
                <CardMedia
                    image={images[0]}
                    sx={ImgCardStyle}
                    title={description}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Brand: {brand}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Price: {price}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Discount: {discountPercentage}%
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Rating: {rating}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Category: {category}
                    </Typography>
                </CardContent>
                <CardActions sx={CardActionsStyle}>
                    <Link href={`/${id}`}>
                        <Button size="medium"
                                variant="contained">
                            Show more
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </>
    );
}