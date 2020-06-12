import React from 'react'
import Marked from './Makrs/Marked'
import UnMarked from './Makrs/UnMarked'

const Mark = (props) => {

    return (
        <div>
            {props.isMarked?<Marked/>:<UnMarked/>}
        </div>
    )
}

export default Mark