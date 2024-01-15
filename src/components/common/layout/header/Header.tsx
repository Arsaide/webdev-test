import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import {Container} from "@mui/system";
import {appBarSX, typographySX} from "@/components/common/layout/header/Header.styles";

function Header() {

    return (
        <AppBar sx={appBarSX}>
            <Container>
                <Toolbar>
                    <Typography
                        variant={'h5'}
                        component={'span'}
                        sx={typographySX}>
                        Arsaide shop
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