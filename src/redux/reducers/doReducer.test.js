import doReducer, {addDo, deleteDo, updateMark} from "./doReducer";

const initialState = {
    doData: [
        {id: 1, text: 'Some Do', mark: true},
        {id: 2, text: 'Some Do 2', mark: false}
    ]
}

it('AddDo is successful increment length', () => {
    const action = addDo('Do test')
    const newState = doReducer(initialState, action)
    expect(newState.doData.length).toBe(3)
})

it('AddDo add correct message', () => {
    const action = addDo('Do test')
    const newState = doReducer(initialState, action)
    expect(newState.doData[2].text).toBe('Do test')
})

it('AddDo add correct mark (false)', () => {
    const action = addDo('Do test')
    const newState = doReducer(initialState, action)
    expect(newState.doData[2].mark).toBe(false)
})

it('DeleteDo is successful decrement length', () => {
    const action = deleteDo(0)
    const newState = doReducer(initialState, action)
    expect(newState.doData.length).toBe(2)
})

it('UpdateMark is successful change mark', () => {
    const action = updateMark(2)
    const newState = doReducer(initialState, action)
    expect(newState.doData[1].mark).toBe(true)
})