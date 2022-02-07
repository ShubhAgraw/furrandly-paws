import React from 'react'

function Notification(props){
    return (
        <div className="media border p-3">
            <div className="media-body">
              <h6>{props.notificationUserName}</h6>
              <p>{props.notificationUserName} liked your profile</p>
            </div>
            <img
              src={props.notificationUserAvatar}
              alt=""
              className="rounded-circle"
              id="side-img"
            />
          </div>
    )
}
export default Notification
