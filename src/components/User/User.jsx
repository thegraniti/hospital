import React from "react";
import { user } from "../../constant/images";
import './user.css'


function User(props) {

    return (
    <div className="user-information">
      <div className="post-user">
        <img src={user} alt="user" />
        <p>John Doe</p>
      </div>
      <div className="post-information">
        <p>
          <i className="fa-regular fa-eye"></i>{props.count}
        </p>
        <p>
          <i className="fa-regular fa-comment"></i>123
        </p>
      </div>
    </div>
  );
}

export default User;
