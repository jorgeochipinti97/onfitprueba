import { useContext, useState } from 'react';

import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, SearchOutlined, DashboardOutlined, LoginOutlined, VpnKeyOutlined } from "@mui/icons-material"
import GradeIcon from '@mui/icons-material/Grade';
import { UiContext } from '../context/ui';
import { useRouter } from 'next/router';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import QuizIcon from '@mui/icons-material/Quiz';
import ContentPasteSearchSharpIcon from '@mui/icons-material/ContentPasteSearchSharp';
import NotListedLocationSharpIcon from '@mui/icons-material/NotListedLocationSharp';
import Cookie from 'js-cookie';
import HomeIcon from '@mui/icons-material/Home';
export const SideMenu = () => {

    const router = useRouter();
    const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
    // TODO: HACER QUE LA BUSQUEDA SEA POR LOCALSTORAGE Y NO POR QUERY
    const [searchTerm, setSearchTerm] = useState('');

    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;
        navigateTo('/search');
    }


    const navigateTo = (url: string) => {
        toggleSideMenu();
        router.push(url);
    }


    return (
        <Drawer
            open={isMenuOpen}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            onClose={toggleSideMenu}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>
                
                    <ListItem
                        button
                        sx={{ display: { xs: '', sm: 'none' } }}
                        onClick={() => navigateTo('/')}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Inicio'} />
                    </ListItem>
                    <ListItem
                        button
                        sx={{ display: { xs: '', sm: 'none' } }}
                        onClick={() => navigateTo('/productos')}
                    >
                        <ListItemIcon>
                            <StorefrontOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Productos'} />
                    </ListItem>
                   

                    <ListItem
                        sx={{ display: { xs: '', sm: 'none' } }}
                        button
                        onClick={() => navigateTo('/contacto')}>
                        <ListItemIcon>
                            <ConnectWithoutContactIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Contacto'} />
                    </ListItem>
                    <ListItem
                        sx={{ display: { xs: '', sm: 'none' } }}
                        button
                        onClick={() => navigateTo('/faqs')}>
                        <ListItemIcon>
                            <QuizIcon />
                        </ListItemIcon>
                        <ListItemText primary={'FAQS'} />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => navigateTo('/favorites')}>
                        <ListItemIcon>
                            <GradeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Favorites'} />
                    </ListItem>
                </List>
            </Box>
        </Drawer >
    )
}