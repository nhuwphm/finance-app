import React, { useState, useEffect } from 'react';
import './Profile.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getAuth, updateProfile } from "firebase/auth";

const auth = getAuth();
const storage = getStorage();

async function uploadImageAndGetURL(file) {
    // Create a storage reference
    const storageRef = ref(storage, 'profilePictures/' + file.name);
    // Upload file and store the task
    const uploadTask = uploadBytesResumable(storageRef, file);
    // Wait for the upload to complete
    await new Promise((resolve, reject) => {
        uploadTask.on('state_changed', 
        (snapshot) => {}, 
        (error) => reject(error), 
        () => resolve()
        );
    });
    // Get the download URL
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
}

// Define the Profile component
function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState('');
  
    useEffect(() => {
        const auth = getAuth();
        if (auth.currentUser) {
          setName(auth.currentUser.displayName);
          setEmail(auth.currentUser.email);
          setProfilePic(auth.currentUser.photoURL);
        }
      }, []);

      const handleFileUpload = async (event) => {
                // Get the file from the event
        const file = event.target.files[0];

        // Upload the file and get the URL
        const url = await uploadImageAndGetURL(file);

        // Update the user's profile picture URL
        await updateProfile(auth.currentUser, {
            photoURL: url,
        });
    
        setProfilePic(auth.currentUser.photoURL);
      };

    return (
        <div className = "profile">
            <h1>Hello, {name}</h1>
            <p>Email: {email}</p>
            <img src={profilePic} alt="Profile" />
            <input type="file" id="fileUpload" onChange={handleFileUpload} style={{display: 'none'}} />
            <label htmlFor="fileUpload" className="customFileUpload">Upload Image</label>
        </div>
    );
}

export default Profile;