import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

const reRenderEntireTree = (state) => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    )
}

reRenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    reRenderEntireTree(state)
})