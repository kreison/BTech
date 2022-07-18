import { Alert, Modal } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import cl from './ProductFavourite.module.css'

const ProductFavourite = ({
	id,
	title,
	vershion,
	porc,
	Mainphoto,
	secondPhoto,
	ssd,
	valuta,
	img,
	addFunc,
	removeFAvorites,
}) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	useEffect(()=>{
		if (open === true){
			setTimeout(()=> setOpen(false), 1500)
		}
	}, [open])
	return (
		<>
			<Modal
				sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
				open={ open }
				onClose={ handleClose }
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Alert severity="success">Добавлено в корзину</Alert>
			</Modal>



			<div className={ cl.main } id={ id }>
				<div className={ cl.mainPage }>
					<div className='container'>
						<div className={ cl.cards }>
							{/* <div className='cardsImg'></div> */ }

							<div>
								<img src={ img } alt={ title } className={ cl.cardsImg } />
								<div className={ cl.squares }>
									<div className={ cl.square }></div>
									<div className={ cl.square }></div>
									<div className={ cl.square }></div>
									<div className={ cl.square }></div>

								</div>
							</div>

							<div className={ cl.descripCards }>
								<h3>
									{ title } ({ vershion })
								</h3>
								<div className={ cl.iconCards }>
									<div className={ cl.iconCards }>
										<ul>
											<li className={ cl.iconOneCards }></li>
											<li className={ cl.iconOneCards }></li>
											<li className={ cl.iconOneCards }></li>
											<li className={ cl.iconOneCards }></li>
											<li className={ cl.iconOneCards }></li>

										</ul>
										<span>15 отзывов</span>
									</div>

									<div className={ cl.fonn }>
										<h5 className={ cl.h5 }>
											<span>Процессор</span> { porc }
										</h5>
										<h5 className={ cl.h5 }>
											<span>Основная камера</span> { Mainphoto }
										</h5>
										<h5 className={ cl.h5 }>
											<span>Фронтальная камера</span> { secondPhoto }
										</h5>
										<h5 className={ cl.h5 }>
											<span>Встроенная память</span> { ssd }
										</h5 >
										<h5 className={ cl.h5 }>
											<span>Оперативная память</span> { ssd }
										</h5 >
									</div>
								</div>
							</div>
							<div className={ cl.buttons }>
								<h3>{ valuta }</h3>
								<button
									className={ 'button' }
									style={ { marginBottom: 20 } }
									onClick={ () =>
										{
											addFunc({
											id,
											title,
											vershion,
											porc,
											Mainphoto,
											secondPhoto,
											ssd,
											valuta,
										})
										handleOpen()
									}
									}
								>
									<p >В корзину</p>
								</button>

								<div className={ cl.deleteBtn }>
									<div
										className={ cl.iconTwoCards }
										onClick={ () => removeFAvorites(id) }
									>
										<p>Удалить</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={ cl.lineCards }></div>
				</div>
			</div>
		</>

	)
}

export default ProductFavourite
