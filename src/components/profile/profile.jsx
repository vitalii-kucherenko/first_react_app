import React from 'react'
import Post from "./Post/post";
const Profile = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-6'>avatar</div>
                <div className='col-lg-6'>info</div>
            </div>
            <Post/>
        </div>
    );
}

export default Profile