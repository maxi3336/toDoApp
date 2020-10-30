import React from 'react'
import Do from "./Do/Do";

const Doings = (props) => {
        let doData = props.doData.map(el => {

        const onSubmit = (data) => {
            props.setEdit(el.id)
            props.changeDo(el.id, data.doText)
            props.reset('changeDo')
        }

        return (
                <Do
                    key={el.id}
                    id={el.id}
                    content={el.text}
                    isMarked={el.mark}
                    editing={el.editing}
                    updateMark={props.updateMark}
                    deleteDo={props.deleteDo}
                    setEdit={props.setEdit}
                    onSubmit={onSubmit}
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
