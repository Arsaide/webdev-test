'use client'
import React, {useEffect, useState} from 'react';
import styles from './Goods.module.scss'
import axios, {Axios} from "axios";
import Loading from "@/components/common/ui/loading/Loading";
import GoodsCard from "@/components/pages/main-page/goods/subcomponents/goods-card/GoodsCard";



function Goods() {
    const[goods, setGoods] = useState(null)

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => {
                setGoods(res.data)
            })
    }, []);

    return (
        <section className={styles.goods}>
            {goods ? <GoodsCard/> : <Loading/>}
        </section>
    );
}

export default Goods;

