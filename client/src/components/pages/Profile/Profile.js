import React from 'react';
import './Profile.css';
import profilePicture from './bill.jpg'; // import image

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

//initialize firebase
const firebaseConfig = {
    //my firebase configuration?
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            profilePicture: profilePicture, // use imported image
        };
    }

    handleImageUpload = event => {
        const file = event.target.files[0];
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
    
        uploadTask.on('state_changed', 
            (snapshot) => {
                // Progress function ...
            }, 
            (error) => {
                // Error function ...
                console.log(error);
            }, 
            () => {
                // Complete function ...
                storage.ref('images').child(file.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ profilePicture: url });
                    firestore.collection('users').doc(this.state.email).set({
                        profilePicture: url
                    });
                })
            });
    };

    //get profile picture from firestore when componenet mounts
    componentDidMount() {
        firestore.collection('users').doc(this.state.email).get().then((doc) => { //get document from current user
            if (doc.exists) {
                this.setState({ profilePicture: doc.data().profilePicture });
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    

    render() {
        return (
            <div className="profile">
                <h1>Profile Page</h1>
                <img src={this.state.profilePicture} alt="Profile" />
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
            </div>
        );
    }
}



export default Profile;