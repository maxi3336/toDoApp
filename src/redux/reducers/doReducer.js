import {v4} from 'uuid'

const ADD_DO = 'ADD-DO'
const DELETE_DO = 'DELETE-DO'
const UPDATE_MARK = 'UPDATE-MARK'
const SET_EDIT = 'SET-EDIT'
const CHANGE_DO = 'CHANGE-DO'

let initialState = {
    doData: []
}

const doReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_DO: {
            return {
                ...state,
                doData: [...state.doData, {id: v4(), text: action.text, mark: false, editing: false}]
            }
        }
        case DELETE_DO: {
            return {
                ...state,
                doData: state.doData.filter(el => el.id !== action.id)
            }
        }
        case UPDATE_MARK: {
            return {
                ...state,
                doData: state.doData.map(el => {
                    if(el.id === action.id)
                        el.mark = !el.mark
                    return el
                })
            }
        }
        case SET_EDIT: {
            return {
                ...state,
                doData: state.doData.map(el => {
                    if(el.id === action.id)
                        el.editing = !el.editing
                    return el
                })
            }
        }
        case CHANGE_DO: {
            return {
                ...state,
                doData: state.doData.map(el => {
                    if(el.id === action.id)
                        el.text = action.text
                    return el
                })
            }
        }
        default: {
            return state
        }
    }
}

export const addDo = (text) => ({type: ADD_DO, text})
export const updateMark = (id) => ({type: UPDATE_MARK, id})
export const deleteDo = (id) => ({type: DELETE_DO, id})
export const setEdit = (id) => ({type: SET_EDIT, id})
export const changeDo = (id, text) => ({type: CHANGE_DO, id, text})

export default doReducer
