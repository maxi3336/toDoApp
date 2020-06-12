import React from 'react'
import MarkedContainer from './Makrs/MarkedContainer'
import UnMarkedContainer from './Makrs/UnMarkedContainer'

const Mark = (props) => {

    return (
        <div>
            {props.isMarked?<MarkedContainer store={props.store} doId={props.doId}/>:<UnMarkedContainer store={props.store} doId={props.doId}/>}
        </div>
    )
}

export default Mark