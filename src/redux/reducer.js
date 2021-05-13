const initialState = {
    list: [],
}

export const Action = {
    Types: {
        SET_PHOTOS: 'SET_PHOTOS',
    },
    Creator: {
        setPhotos: (payload) => {
            return {
                type: Action.Types.SET_PHOTOS,
                payload
            }
        },
    }

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
        case Action.Types.SET_PHOTOS: {
            return {
                ...state,
                list: action.payload
            }
        }
    }
}

export default reducer;