let GetLocalState = () => {
    let localStateStr = localStorage.getItem('localState')
    localStateStr = JSON.parse(localStateStr)
    return localStateStr
}

export default GetLocalState