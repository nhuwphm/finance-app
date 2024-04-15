import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { getAuth } from "firebase/auth";
import { collection, addDoc, onSnapshot, query, doc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "../../../firebase"

const auth = getAuth();

function Reminder({ addReminder: addReminderProp }) {
    const [newReminder, setNewReminder] = useState('');
    const [reminders, setReminders] = useState([]);

    //reminders
    const markAsComplete = id => {
        const reminderRef = doc(db, 'users', auth.currentUser.uid, 'reminders', id.toString());
        const reminder = reminders.find(reminder => reminder.id === id);
    
        if (reminder) {
            updateDoc(reminderRef, { completed: !reminder.completed })
                .then(() => {
                    setReminders(reminders.map(reminder => 
                        reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder
                    ));
                })
                .catch(error => {
                    console.error(`Failed to mark reminder as complete: ${error}`);
                });
        } else {
            console.error(`No reminder found with id ${id}`);
        }
    };
    
    const removeReminder = id => {
        const reminderRef = doc(db, 'users', auth.currentUser.uid, 'reminders', id.toString());
        deleteDoc(reminderRef)
            .then(() => {
                setReminders(reminders.filter(reminder => reminder.id !== id));
            })
            .catch(error => {
                console.error(`Failed to remove reminder: ${error}`);
            });
    };

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            const remindersQuery = query(collection(db, 'users', user.uid, 'reminders'));
            const unsubscribe = onSnapshot(remindersQuery, (snapshot) => {
                setReminders(snapshot.docs.map(doc => doc.data().text));
            });

            // Clean up subscription on unmount
            return () => unsubscribe();
        }
    }, []);

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
                {reminders.map((reminder, index) => (
                    <div key={index} className="reminder">
                        <div className="reminder-content">{reminder}</div>
                        <div className="buttons">
                            <div className="complete">
                                <button onClick={() => markAsComplete(index)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="complete-svg"><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V8a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h8a.5.5 0 000-1H3A1.5 1.5 0 001.5 3v10z" clip-rule="evenodd"></path></svg></button>
                            </div>
                            <div className="remove">
                                <button onClick={() => removeReminder(index)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="remove-svg"><path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"></path><path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path><path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path></svg></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reminder;