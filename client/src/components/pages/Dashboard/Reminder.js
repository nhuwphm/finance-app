import React, { useState } from 'react';
import './Dashboard.css';

function Reminder({ addReminder }) {
    const [newReminder, setNewReminder] = useState('');

    const handleReminderChange = (event) => {
        setNewReminder(event.target.value);
    };

    const handleReminderSubmit = (event) => {
        event.preventDefault();
        addReminder(newReminder);
        setNewReminder('');
    };

    return (
        <div className="reminder">
            <div className="reminder-content">
                <form onSubmit={handleReminderSubmit}>
                    <input type="text" value={newReminder} onChange={handleReminderChange} placeholder="Enter reminder" className="reminder-input" />
                    <button type="submit" className="reminder-button">Add Reminder</button>
                </form>
            </div>
        </div>
    );
}

export default Reminder;