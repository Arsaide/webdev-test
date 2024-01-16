import { Container } from '@mui/material';
import React from 'react';
import Image from "next/image";
import loadingGif from '../../../../../public/loading.gif'
import styles from "./Loading.module.scss"

const Loading = () => {
    return (
        <>
            <Container sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{margin: '15px'}}><em>Please wait or use pagination!</em></div>
                <Image className={styles.img} src={loadingGif} alt={'Loading gif'} width={700} height={500}/>
            </Container>
        </>
    );
};

export default Loading;
