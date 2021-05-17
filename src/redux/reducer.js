const initialState = {
    list: [],
    searchResult: {},
    topics: [],
    topicBySlug: []
}

export const Action = {
    Types: {
        SET_PHOTOS: 'SET_PHOTOS',
        SET_SEARCH_RESULT: 'SET_SEARCH_RESULT',
        SET_TOPICS: 'SET_TOPICS',
        SET_TOPIC_BY_SLUG: 'SET_TOPIC_BY_SLUG'
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
        setTopics: (payload) => {
            return {
                type: Action.Types.SET_TOPICS,
                payload
            }
        },
        setTopicBySlug: (payload) => {
            return {
                type: Action.Types.SET_TOPIC_BY_SLUG,
                payload
            }
        }
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
        case Action.Types.SET_TOPICS: {
            return {
                ...state,
                topics: action.payload
            }
        }
        case Action.Types.SET_TOPIC_BY_SLUG: {
            return {
                ...state,
                topicBySlug: action.payload
            }
        }
    }
}

export default reducer;