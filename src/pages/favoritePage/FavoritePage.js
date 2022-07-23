import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductFavourite from '../FavoritePage/ProductFavourite'
import { addBascket, removeCards } from '../../redux/actions/actions'
import { useEffect } from 'react'

const FavoritePage = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.favoriteReducer.products)
	
	const [productsFav, setProductsFav] = useState({result: JSON.parse(localStorage.getItem('products')).result})

	const handleAddFunc = ( cart) => {
		console.log(cart, productsFav);
		if (productsFav.result.length !== 0) {
			
			if (productsFav.result[productsFav.result.length - 1].id !== cart.id) {
				setProductsFav({...productsFav, result: [...productsFav.result, cart]})
				dispatch(addBascket(cart));

			}
		} else {
			setProductsFav({...productsFav, result: [...productsFav.result, cart]})
			dispatch(addBascket(cart));
		}
	}
	useEffect(()=>{
		console.log(JSON.parse(localStorage.getItem('products')).result);
		console.log(productsFav);
	}, [])
	useEffect(() => {

		localStorage.setItem('products', JSON.stringify(productsFav))
	}, [productsFav])
	const handleRemoveFunc = id => {
		dispatch(removeCards(id))
	}

	return (
		<div className='container'>
			<h2>Избранное</h2>
			{ products.map(p => (
				<ProductFavourite
					key={ p.id }
					{ ...p }
					addFunc={ handleAddFunc }
					removeFAvorites={ handleRemoveFunc }
				/>
			)) }
		</div>
	)
}

export default FavoritePage
