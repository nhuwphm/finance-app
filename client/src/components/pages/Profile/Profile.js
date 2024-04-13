import React from 'react';
import './Profile.css';
import profilePicture from './bill.jpg'; // import image

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            profilePicture: profilePicture, // use imported image
        };
    }

    render() {
        return (
            <div className="profile">
                <h1>Profile Page</h1>
                <img src={this.state.profilePicture} alt="Profile Picture Here" />
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
            </div>
        );
    }
}
export default Profile;