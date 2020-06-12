const ADD_DO = 'ADD-DO'
const UPDATE_DO_TEXT = 'UPDATE-DO-TEXT'

let initialState = {
    doData: [
        {id: 1, text: 'Cook food', mark: 'unmarked'},
        {id: 2, text: 'Wash food', mark: 'unmarked'}
    ],

    newDoText: ''
}

const createReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_DO:

            let newDo = {
                id: (state.doData.length+1),
                text: state.newDoText
            }

            state.doData.push(newDo)
            state.newDoText = ''

            return state

        case UPDATE_DO_TEXT:
            state.newDoText = action.newText

            return state

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

export default createReducer