const SetStandartLocalState = () => {
    let localState = {
        doData: [
            {id: 1, text: 'Open ToDo App', mark:true},
            {id: 2, text: 'Add something', mark:false}
        ],
        newDoText: ''
    }
    localStorage.setItem('localState', JSON.stringify(localState))
}

export default SetStandartLocalState