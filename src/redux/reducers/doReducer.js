const ADD_DO = 'ADD-DO'
const UPDATE_DO_TEXT = 'UPDATE-DO-TEXT'
const UPDATE_MARK = 'UPDATE-MARK'

let initialState = {
    doData: [
        {id: 1, text: 'Open To Do', mark: true},
        {id: 2, text: 'Add something', mark: false}
    ],

    newDoText: ''
}

const doReducer = (state = initialState, action) => {

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

        case UPDATE_MARK:
            let doDat = state.doData[action.id-1]
            doDat.mark = action.mark

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

export default doReducer