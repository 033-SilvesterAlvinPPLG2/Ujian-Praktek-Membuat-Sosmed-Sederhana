import React, { useState } from 'react';

function UserCard (props) {
    const [isLiked, setIsLiked] = useState(false);
    const [isFollowed, setIsFollowed] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleFollow = () => {
        setIsFollowed(!isFollowed);
    };

return (
    <div className="card">
    <img className="avatar" src={props.avatar} alt={props.name} />
    <h2 className="name">{props.name}</h2>
    <p className="role">{props.role}</p>
    <p className="bio">{props.bio}</p>
    <div className="button-group">
        <button 
            className={`button like-button ${isLiked ? 'liked' : ''}`}
            onClick={handleLike}
        >
            {isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>
        <button 
            className={`button follow-button ${isFollowed ? 'followed' : ''}`}
            onClick={handleFollow}
        >
            {isFollowed ? '✓ Following' : '+ Follow'}
        </button>
    </div>
    </div>
);
}

export default UserCard;