import React from 'react';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

const Basket = (props: { cartOpen: boolean, closeCart: any, order: string; removeFromOrder: string; }) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order,
        removeFromOrder,
    } = props

    return (
        <Drawer
            anchor={'right'}
            open={cartOpen}
            onClose={closeCart}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary={"Cart"}/>
                </ListItem>
            </List>
        {/*Не получилось реализовать, мало времени и были ошибки*/}
        </Drawer>
    );
}

export default Basket;