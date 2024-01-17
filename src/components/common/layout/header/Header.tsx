import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import {Container} from "@mui/system";
import {appBarSX, typographySX} from "@/components/common/layout/header/Header.styles";
import Link from "next/link";

function Header() {

    return (
        <AppBar sx={appBarSX}>
            <Container>
                <Toolbar>
                    <Typography
                        variant={'h5'}
                        sx={typographySX}>
                        <Link style={{color: "#fff"}} href={'/'}>Arsaide shop</Link>
                    </Typography>
                    <IconButton
                        color={'inherit'}>
                        <ShoppingBasket/>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;