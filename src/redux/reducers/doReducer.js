import {v4} from 'uuid'

const ADD_DO = 'ADD-DO'
const DELETE_DO = 'DELETE-DO'
const UPDATE_TEXT = 'UPDATE-TEXT'
const UPDATE_MARK = 'UPDATE-MARK'

let initialState = {
    doData: [],
    newDoText: ''
}

const doReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_DO: {
            return {
                ...state,
                doData: [...state.doData, {id: v4(), text: state.newDoText, mark: false}],
                newDoText: ''
            }
        }
        case DELETE_DO: {
            return {
                ...state,
                doData: state.doData.filter(el => el.id !== action.id)
            }
        }
        case UPDATE_TEXT: {
            return {
                ...state,
                newDoText: action.text
            }
        }
        case UPDATE_MARK: {
            debugger
            return {
                ...state,
                doData: state.doData.map(el => {
                    if(el.id === action.id)
                        el.mark = !el.mark
                    return el
                })
            }
        }
        default: {
            return state
        }
    }
}

export const addDo = () => ({type: ADD_DO})
export const updateText = (text) => ({type: UPDATE_TEXT, text})
export const updateMark = (id) => ({type: UPDATE_MARK, id})
export const deleteDo = (id) => ({type: DELETE_DO, id})

export default doReducer
