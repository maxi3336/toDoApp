import React from "react";

export const Input = ({input, meta, ...props}) => {
    return (
        <div className="w-100 position-relative">
            { meta.touched && meta.error && <span className="text-danger position-absolute" style={{top: -30}}>{meta.error}</span>}
            <input {...input} {...props}/>
        </div>
    )
}
