import React from 'react'
import Notification from './Notification'


function MainPageLeft(props){
    var users = props.notfiUsers
    // console.log(users);
    return (
        <div class="col col-left">
          <br />
          <h2 class="bg-danger">Notifications</h2>
          {users.map(item =>
                <Notification notificationUserName={item.name} notificationUserAvatar={item.avatar}/>
                    )}
        </div>
    )
}

export default MainPageLeft
