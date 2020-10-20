import React from "react";

export const Input = ({input, meta, ...props}) => {
    return (
        <div className="w-100">
            { meta.touched && meta.error && <span className="text-danger">{meta.error}</span>}
            <input {...input} {...props}/>
        </div>
    )
}
