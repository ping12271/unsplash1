const initialState = {
    list: [],
    searchResult: {}
}

export const Action = {
    Types: {
        SET_PHOTOS: 'SET_PHOTOS',
        SET_SEARCH_RESULT: 'SET_SEARCH_RESULT'
    },
    Creators: {
        setPhotos: (payload) => {
            return {
                type: Action.Types.SET_PHOTOS,
                payload
            }
        },
        setSearchResult: (payload) => {
            return {
                type: Action.Types.SET_SEARCH_RESULT,
                payload
            }
        },
    },

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
        case Action.Types.SET_SEARCH_RESULT: {
            return {
                ...state,
                searchResult: action.payload
            }
        }
    }
}

export default reducer;