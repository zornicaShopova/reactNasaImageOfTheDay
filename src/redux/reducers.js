import actions from './action-types';
import {combineReducers} from 'redux';

function movies(state = [], action) {
    switch(action.type) {
        case actions.SET_MOVIES: {
            return [...action.payload]
        }
        default: 
            return state;
    }
}
//  nasa images 
function nasaImages(state = [], action) {
    switch(action.type){
         case actions.SET_IMAGE:  {
             return [...action.payload]
         }
         default:
             return state;
    }
     
 }
// sleected day for nasa
 function selectedDay(state='',action){
     switch(action.type){
         case actions.SET_SELECTED_DAY: {
             return action.payload
         }
         default:
             return state;
     }
 }

function movie(state = {}, action) {
    switch(action.type) {
        case actions.SET_MOVIE: {
            return action.payload
        }
        default: 
            return state;
    }
}


function genres(state = [], action) {
    switch(action.type) {
        case actions.SET_GENRES: {
            return [...action.payload]
        }
        default: 
            return state;
    }
}

function listView(state = false, action) {
    switch(action.type) {
        case actions.SET_LIST_VIEW: {
            return action.payload
        }
        default: 
            return state;
    }
}


function selectedFilters(state = {
    selectedYear: '2021',
    selectedGenres: [],
}, action) {
    switch(action.type) {
        case actions.SET_SELECTED_YEAR: {
            return {
                ...state, 
                ...{
                    selectedYear: action.payload,
                }
            }
        }
        case actions.SET_SELECTED_GENRES: {
            return {
                ...state,
                ...{
                    selectedGenres: [...action.payload]
                }
            }
        }
        default: 
            return state;
    }
}

export default combineReducers({movies,nasaImages,selectedDay, movie, genres, listView, selectedFilters});
