import { Alert, Box, Modal, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { forSomethingTrashPreviewAction } from '../../redux/reducers/forSomethingTrash';
import classes from './Preview.module.css'

function Preview({ todo }) {
    const dist = useDispatch();
    const selector = useSelector(state=> state.trash.preview)
    const [info, setInfo] = useState({ sprites: { other: { dream_world: { front_default: '' } } } });
    const [click, setClick] = useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true); setTimeout(() => {
            handleClose();
        }, 1000);
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        dist(forSomethingTrashPreviewAction(todo.url));
    }, []);

    useEffect(()=>{
        console.log(selector);
        setInfo(selector)
    }, [selector])

    const addFavourite = async (e) => {
        e.target.classList.toggle(classes.active);
        setClick(!click);

        if (e.target.classList.contains(classes.active)) {
            handleOpen();
            let response = await fetch('http://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ id: info.id }),
            });
        };
    }
    // const memoizedCallback = useCallback(
    //     () => {
    //         addFavourite();
    //     },
    //     [click],
    // );
    // useEffect(()=>{
    //     console.log(click);
    // }, [click])
    return (
        <>
            <Modal
                open={ open }
                onClose={ handleClose }
                sx={ { border: 0 } }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ { border: 0, outline: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' } }>
                    <Alert severity='success'>Добавлено в Избранное</Alert>

                </Box>
            </Modal>
            <div className={ classes.preview }>
                <Link className={ classes.link } to={ `/product/${info.id}` }>
                    {
                        info.sprites.other.dream_world.front_default === ''
                            ?
                            <Skeleton variant="circular" width={ 190 } height={ 190 } />
                            :
                            <img className={ classes.img } src={ info.sprites.other.dream_world.front_default } alt='image not found' />

                    }



                </Link>
                {/* <p className={ classes.name }>{todo.name} </p> */ }
                {
                    info.name === undefined
                        ?
                        (
                            <Skeleton variant="text" />


                        )
                        :
                        <>
                            <p className={ classes.name }>{ info.name }Смартфон Samsung Galaxy A 52 5G (EU)</p>
                            <div className={ classes.bottom }>
                                <h5 className={ classes.price }>45 000 cом</h5>
                                <div onClick={ addFavourite } className={ classes.addFavourite }></div>
                            </div>
                        </>

                }

            </div >
        </>

    );
}

export default Preview;