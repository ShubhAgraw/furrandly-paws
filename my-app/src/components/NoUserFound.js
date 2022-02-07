import React from 'react'

function NoUserFound(props){
    return(
        <div class="alert alert-warning alert-dismissible fade show" role="alert" style={{zIndex:"120"}}>
                        <strong>{props.alert}</strong> {props.msg}
        </div>
    )
}

export default NoUserFound