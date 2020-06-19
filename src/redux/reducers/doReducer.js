import GetLocalState from "../GetLocalState";
import SetStandartLocalState from "../SetStandartLocalState";

const ADD_DO = 'ADD-DO'
const UPDATE_DO_TEXT = 'UPDATE-DO-TEXT'
const UPDATE_MARK = 'UPDATE-MARK'
const RESET_STATE = 'RESET-STATE'
const DELETE_DO = 'DELETE-DO'

let initialState

if(GetLocalState() === null) {
    SetStandartLocalState()
    initialState = GetLocalState()
} else initialState = GetLocalState()

let findIdOfDo = (state, id) => {
    let DoId
    for(let i = 0; i < state.doData.length; i++) {
        if(state.doData[i].id === id)
            DoId = i
    }
    return DoId
}

const doReducer = (state = initialState, action) => {

    let copyState

    let setLocalState = (state) => {
        let localState = {
            ...state,
            doData: [...state.doData]
        }
        let localStateStr = JSON.stringify(localState)
        localStorage.clear()
        localStorage.setItem('localState', localStateStr)
    }


    switch(action.type) {
        case ADD_DO:
            if(state.newDoText === ''){
                alert('Please write something!')
                return GetLocalState()
            }
            copyState = {
                ...state,
                newDoText: '',
                doData: [...state.doData, {id: (state.doData.length+1), text: state.newDoText}]
            }
            setLocalState(copyState)
            console.log(GetLocalState())
            return copyState

        case UPDATE_DO_TEXT:
            copyState = {
                ...state,
                newDoText: action.newText
            }
            setLocalState(copyState)
            return copyState

        case UPDATE_MARK:
            copyState = {
                ...state,
                doData: [...state.doData ]
            }
            copyState.doData[action.id-1].mark = action.mark
            setLocalState(copyState)
            console.log(GetLocalState())
            return copyState

        case RESET_STATE:
            SetStandartLocalState()
            copyState = GetLocalState()
            console.log(GetLocalState())
            return copyState

        case DELETE_DO:
            copyState = GetLocalState()
            let id = findIdOfDo(copyState, action.id)
            copyState.doData.splice(id, 1)
            setLocalState(copyState)
            console.log(GetLocalState())
            return copyState

        default:
            return state
    }

    return state
}

export const addDoActionCreator = () => ({
    type: ADD_DO
})

export const updateDoTextActionCreator = (text) => ({
    type: UPDATE_DO_TEXT,
    newText: text
})

export const updateMarkActionCreator = (id, mark) => ({
    type: UPDATE_MARK,
    id: id,
    mark: mark
})

export const resetStateActionCreator = () => ({
    type: RESET_STATE
})

export const deleteDoActionCreator = (id) => ({
    type: DELETE_DO,
    id: id
})

export default doReducer