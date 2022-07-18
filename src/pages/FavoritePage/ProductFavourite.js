import React from 'react'
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
	return (
		<div className={ cl.main } id={ id }>
			<div className={ cl.mainPage }>
				<div className='container'>
					<div className={ cl.cards }>
						{/* <div className='cardsImg'></div> */ }

						<img src={ img } alt={ title } className={ cl.cardsImg } />
						<div className={ cl.squares }>
							<div className={ cl.square }></div>
							<div className={ cl.square }></div>
							<div className={ cl.square }></div>
							<div className={ cl.square }></div>

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
									<h5>
										<span>Процессор</span> { porc }
									</h5>
									<h5>
										<span>Основная камера</span> { Mainphoto }
									</h5>
									<h5>
										<span>Фронтальная камера</span> { secondPhoto }
									</h5>
									<h5>
										<span>Встроенная память</span> { ssd }
									</h5>
									<h5>
										<span>Оперативная память</span> { ssd }
									</h5>
								</div>
							</div>
						</div>
						<div className={ cl.buttons }>
							<h3>{ valuta }</h3>
							<button
								className={ 'button' }
								style={ { marginBottom: 20 } }
								onClick={ () =>
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
					<div className={ cl.lineCards }></div>
				</div>
			</div>
		</div>
	)
}

export default ProductFavourite
