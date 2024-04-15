import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { getAuth } from "firebase/auth";
import { collection, addDoc, onSnapshot, query, doc, deleteDoc } from "firebase/firestore"; 
import { db } from "../../../firebase"

function Reminder({ addReminder }) {
    const [newReminder, setNewReminder] = useState('');
    const [reminders, setReminders] = useState([]);

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            const remindersQuery = query(collection(db, 'users', user.uid, 'reminders'));
            const unsubscribe = onSnapshot(remindersQuery, (snapshot) => {
                setReminders(snapshot.docs.map(doc => ({ id: doc.id, text: doc.data().text })));
            });

            // Clean up subscription on unmount
            return () => unsubscribe();
        }
    }, []);

    const handleRemoveReminder = async (reminder) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            const reminderRef = doc(db, 'users', user.uid, 'reminders', reminder.id);
            await deleteDoc(reminderRef);
        }
    };

    const handleReminderChange = (event) => {
        setNewReminder(event.target.value);
    };

    const handleReminderSubmit = async (event) => {
        event.preventDefault();

        const auth = getAuth();
        const user = auth.currentUser;
        
        if (user) {
            const remindersCollection = collection(db, 'users', user.uid, 'reminders');
            await addDoc(remindersCollection, { text: newReminder });
    
            setNewReminder('');
        } else {
            // handle case where there is no user signed in
        }
    };

    return (
        <div className="reminder">
            <div className="reminder-content">
                <form onSubmit={handleReminderSubmit}>
                    <input type="text" value={newReminder} onChange={handleReminderChange} placeholder="Add reminder" className="reminder-input" />
                    <button type="submit" className="reminder-button">Add Reminder</button>
                </form>

                {reminders && reminders.map((reminder, index) => (
                    <div key={index}>
                        <p>{reminder.text}</p>
                        <button onClick={() => handleRemoveReminder(reminder)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reminder;