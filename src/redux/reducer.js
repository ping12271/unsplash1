const initialState = {
    list: [],
    searchResult: {},
    topics: [],
    topicBySlug: {}
}

export const Action = {
    Types: {
        GET_PHOTOS: 'GET_PHOTOS',
        SET_PHOTOS: 'SET_PHOTOS',
        SEARCH_PHOTOS: 'GET_SEARCH_PHOTOS',
        SET_SEARCH_RESULT: 'SET_SEARCH_RESULT',
        GET_TOPIC_BY_SLUG: 'GET_TOPIC_BY_SLUG',
        SET_TOPIC_BY_SLUG: 'SET_TOPIC_BY_SLUG',
        GET_TOPICS_PHOTOS: 'GET_TOPICS_PHOTOS',
        SET_TOPICS_PHOTOS: 'SET_TOPICS_PHOTOS',
    },
    Creators: {
        getPhotos: (payload) => {
            return {
                type: Action.Types.GET_PHOTOS,
                payload
            }
        },
        setPhotos: (payload) => {
            return {
                type: Action.Types.SET_PHOTOS,
                payload
            }
        },
        searchPhotos: (payload) => {
            return {
                type: Action.Types.SEARCH_PHOTOS,
                payload
            }
        },
        setSearchResult: (payload) => {
            return {
                type: Action.Types.SET_SEARCH_RESULT,
                payload
            }
        },
        getTopicsPhotos: (payload) => {
          return {
              type: Action.Types.GET_TOPICS_PHOTOS,
              payload
          }
        },
        setTopicsPhotos: (payload) => {
            return {
                type: Action.Types.SET_TOPICS_PHOTOS,
                payload
            }
        },
        getTopicBySlug: (slug, payload) => {
            return {
                type: Action.Types.GET_TOPIC_BY_SLUG,
                slug,
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