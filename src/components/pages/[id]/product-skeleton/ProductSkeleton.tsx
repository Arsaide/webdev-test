import React from 'react';
import {Container} from "@mui/system";
import {Paper, Skeleton} from "@mui/material";
import styles from "@/app/[id]/page.module.scss";

const ProductSkeleton = () => {
    return (
        <>
            <Paper sx={{padding: 3, marginBottom: 2}}>
                <Container>
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: '2rem', width: '60%' }} />
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: '3rem', width: '75%' }} />
                    <Skeleton animation="wave" variant={'rounded'} width={'90%'} height={120} sx={{mb: 2}}/>
                    <Skeleton animation="wave" variant={'rounded'} width={163} height={76} sx={{mb: 2}}/>
                    <Skeleton animation="wave" variant={'rounded'} width={66} height={36}/>
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: '2.5rem', width: '100px' }} />
                    <Skeleton animation="wave" variant={'rounded'} width={150} height={40}/>
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: '2.5rem', width: '100px' }} />
                    <div className={styles.imgCnt}>
                        <Skeleton animation="wave" variant={'rectangular'} width={'220px'} height={'220px'}/>
                        <Skeleton animation="wave" variant={'rectangular'} width={'220px'} height={'220px'}/>
                        <Skeleton animation="wave" variant={'rectangular'} width={'220px'} height={'220px'}/>
                        <Skeleton animation="wave" variant={'rectangular'} width={'220px'} height={'220px'}/>
                        <Skeleton animation="wave" variant={'rectangular'} width={'220px'} height={'220px'}/>
                        <Skeleton animation="wave" variant={'rectangular'} width={'220px'} height={'220px'}/>
                    </div>
                </Container>
            </Paper>
        </>
    );
};

export default ProductSkeleton;
