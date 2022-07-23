const initinalState = {
    preview: {
        sprites: {
            other: {
                dream_world: {
                    front_default: ''
                }
            }
        }
    }
}
export const forSomethingTrash = (state = initinalState, action) => {
    switch (action.type) {
        case 'preview':
            return { ...state, preview: action.payload }
        default:
            return state
    }
}

export const forSomethingTrashPreviewAction = (todo) => {
    return async dispatch => {
        const response = await fetch(todo);
        const json = await response.json();
        dispatch({type: 'preview', payload: json});
    }
}