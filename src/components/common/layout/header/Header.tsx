import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

function Header() {
    return (
        <AppBar>
                <Toolbar>
                    <Typography
                        variant={'h5'}
                        component={'span'}
                        sx={{ flexGrow: 1 }}
                    >
                        Arsaide shop
                    </Typography>
                    <IconButton
                        color={'inherit'}
                    >
                        <ShoppingBasket/>
                    </IconButton>
                </Toolbar>
        </AppBar>
    );
}

export default Header;