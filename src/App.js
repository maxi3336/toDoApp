import React from 'react'
import Main from './components/Main/Main'

const App = (props) => {
    return (
        <Main store={props.store}/>
    )
}

export default App