import React from 'react';
import Image from 'next/image'

interface UserProfileProps {
    name: string;
    bio: string;
    image: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, bio, image }) => {
    return (
        <div>
            <Image src={image} alt={name} />
            <h1>{name}</h1>
            <p>{bio}</p>
        </div>
    );
};

export default UserProfile;