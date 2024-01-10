import React from 'react';
import Link from "next/link";
import styles from './GoodsCard.module.scss'

type Props = {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images":[string]
}

function GoodsCard({ id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images }:Props ) {
    return (
        <>
            <article className={styles.card} key={id}>
                <Link href={`/${id}`}>

                </Link>
            </article>
        </>
    );
}

export default GoodsCard;