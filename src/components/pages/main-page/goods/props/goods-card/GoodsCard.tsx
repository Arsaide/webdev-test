import React from 'react';
import Link from "next/link";
import styles from './GoodsCard.module.scss'
import Image from "next/image";


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

export const GoodsCard = ({ id, title, description, price, discountPercentage, rating, brand, category, images }:Props ) => {

    return (
        <>
            <article className={styles.card} key={id}>
                <Link href={`/${id}`}>
                    <div className={styles.cardImg}>
                        <Image
                            src={images[2]}
                            width={400}
                            height={300}
                            alt={description}/>
                    </div>
                    <div>{title}</div>
                    <div>Brand: {brand}</div>
                    <div>Price: {price}</div>
                    <div>Discount: {discountPercentage}%</div>
                    <div>Rating: {rating}</div>
                    <div>Category: {category}</div>
                </Link>
            </article>
        </>
    );
}