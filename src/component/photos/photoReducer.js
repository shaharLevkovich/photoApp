import { ZOOM_PHOTO, SET_LIKE, RETURN, SHOW_FAV, CHANGE_VIEW, SEARCH, FETCHING_PHOTOS, FETCH_PHOTOS_FAILURE, FETCH_PHOTOS_SUCCESS } from './phothActionTypes'

const initialState = {
    showGrid: false,
    searchWord:"",
    items: [],
    isFetching:false,
    error:false,
    photoToEnhance:""
}

export default(state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VIEW:
            return{
                ...state,
                showGrid: action.data
            }
        case SEARCH:
            return{
                ...state,
                searchWord: action.data
            }
        case FETCHING_PHOTOS:
            return {
                ...state,
                items: [],
                isFetching: true
            }
        case FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.data
            }
        case FETCH_PHOTOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case ZOOM_PHOTO:
            return{
                ...state,
                photoToEnhance: action.data
            }
        default:
            return state
    }
}