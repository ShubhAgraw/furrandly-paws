import React from 'react';

function FormInputs(props){


    return(
        <div className="forminputs form-group">
            <label for={props.id}>{props.label}</label><br/>
            <input type={props.type} id={props.id} className="form-control" pattern={props.pattern}></input>
        </div>
    )
}

export default FormInputs;
