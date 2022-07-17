import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductFavourite from '../FavoritePage/ProductFavourite'
import { addBascket, removeCards } from '../../redux/actions/actions'

const FavoritePage = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.favoriteReducer.products)
	const handleAddFunc = cart => {
		dispatch(addBascket(cart))
	}
	const handleRemoveFunc = id => {
		dispatch(removeCards(id))
	}

	return (
		<div className='container'>
			<h2>Избранное</h2>
			{products.map(p => (
				<ProductFavourite
					key={p.id}
					{...p}
					addFunc={handleAddFunc}
					removeFAvorites={handleRemoveFunc}
				/>
			))}
		</div>
	)
}

export default FavoritePage
