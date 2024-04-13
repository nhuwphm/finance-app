import React from 'react';
import './Profile.css';
import firebase from 'firebase/app';
import { getAuth, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            profilePicture: null,
        };
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleImageChange(e) {
        const file = e.target.files[0];
        const storage = getStorage();
        const storageRef = ref(storage, 'some-child');
        uploadBytesResumable(storageRef, file).then(() => {
            getDownloadURL(storageRef).then((url) => {
                this.setState({ profilePicture: url });
                const auth = getAuth();
                const user = auth.currentUser;
                user.updateProfile({
                    photoURL: url
                }).catch((error) => {
                    console.error("Error updating user profile", error);
                });
            });
        });
    }

    render() {
        return (
            <div className="profile">
                <h1>Profile Page</h1>
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <img src={this.state.profilePicture} alt="Profile" />
                <input type="file" onChange={this.handleImageChange} />
            </div>
        );
    }
}
export default Profile;