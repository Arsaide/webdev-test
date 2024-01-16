'use client'
import {fetchData, Product} from "../api/dataService";
import React, { useEffect, useState } from 'react';

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
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Детали продукта {item.id}</h1>
            <p>Title: {item.title}</p>
            <p>Description: {item.description}</p>
        </div>
    );
};

export default ProductDetails;
