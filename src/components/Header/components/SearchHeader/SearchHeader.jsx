import { Box, TextField } from '@mui/material';
import React from 'react';
import cl from '../../Header.module.css'
import logo from '../../../../picture/header/logo.svg'
import burger from '../../../../picture/header/burger.svg'
import search from '../../../../picture/header/search.svg'


const SearchHeader = () => {
    return (
        <>
            <Box sx={ { display: 'flex', width: '100%', marginRight: '15px' } }>
                <Box sx={ { display: { xs: 'none', sm: 'block' }, marginRight: 5, dispaly: 'flex', alignItems: 'center' } }>-
                    <img
                        className={ cl.logo }
                        src={ logo }
                        alt=""
                    />

                </Box>
                <Box sx={ { display: { xs: 'none', sm: 'flex' }, marginRight: 5 } } className={ cl.catalog }>
                    <img

                        src={ burger }
                        alt=""
                    />
                    <p>Каталог</p>
                </Box>
                <Box sx={ { display: 'flex', width: '100%', border: '1px solid #A4A2AF', borderRadius: '12px' } }>
                    <TextField
                        sx={ { height: '100%', background: 'transparent', width: '100%' } }
                        id='standard-basic'
                        className={ cl.standardBasic }
                        placeholder="Искать Iphone 13 Pro Max"
                        variant="standard"
                    />
                    <p style={ { display: 'inline', } } className='button'><img src={ search } alt="" /></p>
                </Box>
            </Box>
        </>
    );
};

export default SearchHeader;