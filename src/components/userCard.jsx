import React, { useEffect, useState } from 'react';

function UserCard (props) {
return (
    <div className="card">
    <img className="avatar" src={props.avatar} alt={props.name} />
    <h2 className="name">{props.name}</h2>
    <p className="role">{props.role}</p>
    <p className="bio">{props.bio}</p>
    <button className="button">Hubungi</button>
    </div>
);
}

export default UserCard;