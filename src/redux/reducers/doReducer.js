import {v4} from 'uuid'

const ADD_DO = 'ADD-DO'
const DELETE_DO = 'DELETE-DO'
const UPDATE_MARK = 'UPDATE-MARK'

let initialState = {
    doData: []
}

const doReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_DO: {
            return {
                ...state,
                doData: [...state.doData, {id: v4(), text: action.text, mark: false}]
            }
        }
        case DELETE_DO: {
            return {
                ...state,
                doData: state.doData.filter(el => el.id !== action.id)
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

export const addDo = (text) => ({type: ADD_DO, text})
export const updateMark = (id) => ({type: UPDATE_MARK, id})
export const deleteDo = (id) => ({type: DELETE_DO, id})

export default doReducer
