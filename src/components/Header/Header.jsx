import React from 'react';
import cl from './Header.module.css'
import logo from '../../picture/header/logo.svg'
import burger from '../../picture/header/burger.svg'

import { AppBar, Box, Drawer, IconButton, List, Toolbar } from '@mui/material/';
import LinksHeader from './components/LinksHeader/LinksHeader';
import SearchHeader from './components/SearchHeader/SearchHeader';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import BreadCrumbsItem from './components/BreadCrumbs/BreadCrumbsItem';


const drawerWidth = 240;

const Header = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const bc = useBreadcrumbs()
    console.log(bc);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={ handleDrawerToggle } sx={ { position: 'sticky', padding: '15px' } }>
            <img className={ cl.logo } src={ logo } alt="" />
            <List>
                <Box className={ cl.submenu }>
                    <LinksHeader />
                </Box>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={ { display: 'flex' } }>
            <AppBar
                sx={ { position: 'sticky' } }
                component="nav"
            >
                <Toolbar
                    sx={ { backgroundColor: 'white', position: 'sticky', flexDirection: 'column', alignItems: 'flex-start', padding: '25px 0 25px' } }
                    
                >
                    <Box   className={ cl.header }>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={ handleDrawerToggle }
                            className={ cl.burger }
                            size='small'
                            sx={ { display: { sm: 'none' } } }
                        >
                            <div className={ cl.burgerContainer }>
                                <img
                                    className={ cl.logo }
                                    src={ burger }
                                    alt=""
                                />
                            </div>
                        </IconButton>

                        <SearchHeader />

                        <Box sx={ { display: { xs: 'none', sm: 'flex' } } }>
                            <LinksHeader />
                        </Box>

                    </Box>
                    <Box sx={{marginTop: '20px'}}>
                        {
                            bc.map(item => <BreadCrumbsItem item={item} key={item.key}/>)
                        }
                    </Box>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={ container }
                    variant='temporary'
                    open={ mobileOpen }
                    onClose={ handleDrawerToggle }
                    ModalProps={ {
                        keepMounted: true, // Better open performance on mobile.
                    } }
                    sx={ {
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },


                    } }
                >
                    { drawer }
                </Drawer>
            </Box>
        </Box>
    );
}


export default Header;