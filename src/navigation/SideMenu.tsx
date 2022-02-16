import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import drawerWidth from "../themes/drawerWidth";
import "./Navigation.css"
export default function SideMenu() {
    return (
        <Drawer
            variant='permanent'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <NavLink to='/dashBoard' className="navigation-link">
                        <ListItem button key='Главная'>
                            <ListItemText primary='Главная' />
                        </ListItem>
                    </NavLink>
                    <NavLink to='/services' className="navigation-link">
                        <ListItem button key='Услуги'>
                            <ListItemText primary='Услуги' />
                        </ListItem>
                    </NavLink>
                    <NavLink to='/goods' className="navigation-link">
                        <ListItem button key='Товары'>
                            <ListItemText primary='Товары' />
                        </ListItem>
                    </NavLink>
                    <NavLink to='/orders' className="navigation-link">
                        <ListItem button key='Заказы'>
                            <ListItemText primary='Заказы' />
                        </ListItem>
                    </NavLink>
                    <NavLink to='/clients' className="navigation-link">
                        <ListItem button key='Клиенты'>
                            <ListItemText primary='Клиенты' />
                        </ListItem>
                    </NavLink>
                    <NavLink to='/storages' className="navigation-link">
                        <ListItem button key='Склады'>
                            <ListItemText primary='Склады' />
                        </ListItem>
                    </NavLink>
                    <NavLink to='/analytics' className="navigation-link">
                        <ListItem button key='Аналитика'>
                            <ListItemText primary='Аналитика' />
                        </ListItem>
                    </NavLink>
                    <NavLink to='/salary' className="navigation-link">
                        <ListItem button key='Зарплата'>
                            <ListItemText primary='Зарплата'/>
                        </ListItem>
                    </NavLink>
                    <NavLink to='/goodsReceiving' className="navigation-link">
                        <ListItem button key='Поступление товара'>
                            <ListItemText primary='Поступление товара'/>
                        </ListItem>
                    </NavLink>
                    
                </List>
                <Divider />
                <List>
                    <NavLink to='/users' className="navigation-link">
                        <ListItem button key='Пользователи'>
                            <ListItemText primary='Пользователи' />
                        </ListItem>
                    </NavLink>
                </List>
            </Box>
        </Drawer>
    )
}