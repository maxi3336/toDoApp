const SetStandartLocalState = () => {
    let localState = {
        doData: [
            {id: 1, text: 'Open ToDo App', mark:true},
        ],
        newDoText: ''
    }
    localStorage.setItem('localState', JSON.stringify(localState))
}

export default SetStandartLocalState