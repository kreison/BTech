import { types } from '../types'

export const addBascket = cart => {
	return {
		type: types.ADD_PRODUCT_INTO_BASKET,
		payload: cart,
	}
}

export const removeCards = id => ({
	type: types.REMOVE_TO,
	id,
})




export const getProductAction = (product) => {
	return {
		type: types.GET_PRODUCT_ACTION,
		payload: product,
	}
}

export const deleteProductAction = (product) => {
	return {
		type: types.DELETE_PRODUCT_ACTION,
		payload: product,
	}
}

export const increaseCountAction = (count) => {
	return {
		type: types.INCREASE_COUNT_ACTION,
		payload: count,
	}
}

export const getTotalSummAction = (totalSumm) => {
	return {
		type: types.GET_TOTALSUMM_ACTION,
		payload: totalSumm,
	}
}






export const createProductAction = (product) => {
	return {
		type: types.CREATE_PRODUCT,
		payload: product
	}
}
// export const hitsProductAction = (product) => {
//     return {
//         type: types.HITS_PRODUCT,
//         payload: product
//     }
// }

export const getHitsAction = (limit = 10) => {
	return async dispatch => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
		const json = await response.json();
		const pokemons = json.results
		console.log('bruh')
		// console.log(pokemons);
		const sortPok = []
		for (let i = 0; i < limit; i++) {
			const response2 = await fetch(pokemons[i].url)
			const json2 = await response2.json()

			sortPok.push({ info: json2, ...pokemons[i] })
		}
		const sorted = sortPok.sort((a, b) => b.info.weight > a.info.weight ? 1 : -1);
		for (let i = 0; i < sorted.length; i++) {
			delete sorted[i].info;
		}
		console.log(sorted)
		dispatch({ type: types.HITS_PRODUCT, payload: sorted })
	}
}


const URL = "https://jsonplaceholder.typicode.com/users"


export const userAction =(user)=> {
    return{
        type: "USER",
        payload: user
    }
}

export const createUserAction = (data) => {
    return async function({dispatch}){
        const options = {
            method: "POST",
            header: {
                "Content-Type" : "Application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(URL,options)
        console.log(data.email)
		// dispatch(userAction(data.email))
    }
}