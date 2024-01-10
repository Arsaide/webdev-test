import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

function Header() {
    return (
        <AppBar>
                <Toolbar>
                    <Typography>
                        Arsaide shop
                    </Typography>
                    <IconButton>
                        <ShoppingBasket/>
                    </IconButton>
                </Toolbar>
        </AppBar>
    );
}

export default Header;