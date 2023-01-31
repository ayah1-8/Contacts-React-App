import React from "react";
import user from "../Images/user.png";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="User Pic"></img>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        style={{ color: "red", marginTop: "7px" }}
        className="trash alternate outline icon"
      ></i>
    </div>
  );
};

export default ContactCard;
