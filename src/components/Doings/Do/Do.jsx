import React from 'react'

const Do = (props) => {

    return (
        <div className="d-flex w-50 justify-content-between align-items-center m-2">
            {
                props.isMarked
                    ?
                    <button className="btn material-icons text-success b" onClick={() => props.updateMark(props.id)}>
                        check_box
                    </button>
                    :
                    <button className="btn material-icons" onClick={() => props.updateMark(props.id)}>
                        check_box_outline_blank
                    </button>
            }
            {
                !props.isMarked ? <span className="text-primary">{props.content}</span> : <s>{props.content}</s>
            }
            <button className="material-icons btn btn-outline-danger" onClick={() => props.deleteDo(props.id)}>
                delete
            </button>
        </div>
    )
}

export default Do
