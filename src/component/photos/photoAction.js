import { ZOOM_PHOTO, SET_LIKE, RETURN, SHOW_FAV, CHANGE_VIEW, SEARCH, FETCHING_PHOTOS, FETCH_PHOTOS_FAILURE,FETCH_PHOTOS_SUCCESS } from './phothActionTypes'
import getDataApi from '../../api'

const zoomPhoto = source => ({ type: ZOOM_PHOTO, data: { source } })//?
const setLike = id => ({ type: SET_LIKE, data: { id } })
const Return = () => ({ type: RETURN })
const showFav = () => ({type:SHOW_FAV})
const changeView = kind => ({type:CHANGE_VIEW, data:kind})
export const setSourcePhoto = (source) => ({ type: ZOOM_PHOTO, data: source })
export const setSearchWord = (word) => ({type:SEARCH, data:word})
export const handleGrid = () => changeView(false)
export const handleList = () => changeView(true)


export const getPhotos = () => {

  return {
      type: FETCHING_PHOTOS
  }
}

export const getPhotosSuccess = data => {

  return {
      type: FETCH_PHOTOS_SUCCESS,
      data
  }
}

export const  getPhotosFailure = () => {
  return {
      type: FETCH_PHOTOS_FAILURE
  }
}

export const fetchData = (wordToSearch) => {

  return (dispatch) => {
      dispatch(getPhotos())
      getDataApi(wordToSearch)
        .then(([response, json])=>{
        dispatch(getPhotosSuccess(json))
      })
      .catch(err => dispatch(getPhotosFailure(err)))
  }
}
