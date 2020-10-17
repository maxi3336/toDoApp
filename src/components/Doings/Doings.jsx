import React from 'react'
import Do from "./Do/Do";

const Doings = (props) => {
    let doData = props.doData.map(el => {

        return (
                <Do
                    id={el.id}
                    content={el.text}
                    isMarked={el.mark}
                    updateMark={props.updateMark}
                    deleteDo={props.deleteDo}
                />
            )
    })

    return (
        <div className="d-flex flex-column-reverse align-items-center w-100 p-5 border">
            {doData}
        </div>
    )
}

export default Doings
