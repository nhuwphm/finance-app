import React, { useState } from 'react';
import './Dashboard.css';
import groceriesImage from './png/grocery-store-groceries-svgrepo-com.svg';
import RelaxImage from'./png/relax.svg';
import NexflixImage from './png/netflix-svgrepo-com.svg';
import AmazonImage from './png/amazon-prime.svg';
import DisneyImage from './png/disneyplus-svgrepo-com.svg';
import HomeImage from './png/home.svg';
import FoodImage from './png/food-svgrepo-com.svg';
import ToolsImage from './png/tools.svg';
import WebFont from 'webfontloader';
import Reminder from './Reminder';

WebFont.load({
  google: {
    families: ['Raleway:ital,wght@0,100..900;1,100..900', 'Lalezar', 'Outfit:wght@100..900', 'Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900']
  }
});


function Dashboard() {
    const [reminders, setReminders] = useState([
        { id: 1, text: "Wells Fargo September, September 27th", completed: false },
        { id: 2, text: "Texas Mobility Authority, August 7th", completed: false },
        { id: 3, text: "School Student Loan, December 6th", completed: false },
        { id: 4, text: "Card, April 8th", completed: false },
        { id: 5, text: "Discover card due on April 8th", completed: false }
      ]);

      //reminders
      const addReminder = (text) => {
        const newReminder = { id: reminders.length + 1, text, completed: false };
        setReminders([...reminders, newReminder]);
      };
    
      const markAsComplete = id => {
        setReminders(reminders.map(reminder => 
          reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder
        ));
      };
    
      const removeReminder = id => {
        setReminders(reminders.filter(reminder => reminder.id !== id));
      };

  const [expensesVisible, setExpensesVisible] = useState(false);
  const toggleExpenses = () => {
    setExpensesVisible(prevState => !prevState);
  };
  

  return (
    <div className='main-content'>
    <div className='container'>
        <div className='mainContainer'>
        <div class="small-expenses">
            <div class="small-expenses-title">Subscriptions</div>
            <div class="netflix">
                <div class="netflix-logo"><img src= {NexflixImage} alt="" /></div>
                <div class="expense">$12.49/mo</div>
                <button class="expense-button">manage</button>
            </div>
            <div class="disney-plus">
                <div class="disney-logo"><img src={DisneyImage} alt=""/></div>
                <div class="expense">$8.74/yr</div>
                <button class="expense-button">manage</button>
            </div>
            <div class="amazon">
                <div class="amazon-logo"><img src={AmazonImage} alt=""/></div>
                <div class="expense">$12.49/yr</div>
                <button class="expense-button">manage</button>
            </div>

        </div>
        </div>

        <div id="financial-info">
        <div class="checking-account">
            <div class="available-balance-text">Available Balance</div>
            <div class="available-balance-amount">$2,041.05</div>
        </div>
        <div class="credit-account">
            <div class="credit-balance-text">Credit Card Balance</div>
            <div class="credit-balance-amount">-$2,041.05</div>
            <div class="make-payment">
                <div class="make-payment-text">Next Payment Due: August 5th</div>
                <div class="credit-card-buttons">
                    <button class="credit-card-payment-button">Pay</button>
                    <button class="credit-card-view-details-button">View Details</button>
                </div>
                
            </div>
        </div>

    </div>

    <div id="content1">
      <p className="reminder-title">Reminders</p>
      <div className="reminders">
        {reminders.length ? reminders.map(reminder => (
          <div key={reminder.id} className={`reminder ${reminder.completed ? 'complete-line' : ''}`}>
            <div className="reminder-content">{reminder.text}</div>
            <div className="buttons">
                <div class="complete">
                <button onClick={() => markAsComplete(reminder.id)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="complete-svg"><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V8a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h8a.5.5 0 000-1H3A1.5 1.5 0 001.5 3v10z" clip-rule="evenodd"></path></svg></button>
                </div>
                <div class="remove">
              <button onClick={() => removeReminder(reminder.id)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="remove-svg"><path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"></path><path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path><path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path></svg></button>
              </div>
            </div>
          </div>
        )) : (
          <div className="no-reminders">
            <p>Currently No Reminders</p>
            <img src={RelaxImage} alt="Relax" width="50" height="50" />
          </div>
        )}
      </div>
      <Reminder addReminder={addReminder}/>
    </div>
        
        <div id="content2">
        <p class="transaction-title">Transaction History</p>
        <div class="transactions">
            <div class="transaction-sub-title">
                <h3>Type</h3>
                <h3>Transaction</h3>
                <h3>Amount</h3>
            </div>
            <ul>
                <li>
                    <h4>Credit</h4>
                    <h4>Amazon Mktplace</h4>
                    <h4 class="credit">$32.16</h4>
                </li>
                <li>
                    <h4>Debit</h4>
                    <h4>H-E-B Gas Station</h4>
                    <h4 class="debit">$34.19</h4>
                </li>
                <li>
                    <h4>Credit</h4>
                    <h4>Amazon Mktplace Rtrn</h4>
                    <h4 class="credit">$20.45</h4>
                </li>
                <li>
                    <h4>Debit</h4>
                    <h4>Amazon Mktplace</h4>
                    <h4 class="debit">$54.76</h4>
                </li>
                <li>
                    <h4>Debit</h4>
                    <h4>H-E-B Gas Station</h4>
                    <h4 class="debit">$34.19</h4>
                </li>
                <li>
                    <h4>Credit</h4>
                    <h4>Amazon Mktplace Rtrn</h4>
                    <h4 class="credit">$20.45</h4>
                </li>
            </ul>
        </div>
    </div>

    <div id="content3">
    <p className="progress-title">Progress</p>
        <div className="monthly-income-info">
            <div className="monthly-income">Current Monthly Income</div>
            <div className="monthly-income-amount">$4,457.67</div>
        </div>
        <div className="progress-container">
            <div className="progress-bar" id="myBar">78%</div>
        </div>
        <div className="total-spent">
            <div className="amount-spent-text">Total Amount Spent</div>
            <div className="amount-spent">$3,657.83</div>
        </div>

    </div>
    <div className='footerContainer'>
    <div className="summary-expenses">
            <div className="summary">
                <div className="summary-text">
                    <div className="total-monthly-expense-title">Total Monthly Expense</div>
                    <div className="total-monthly-expense-text">$3,567.56</div>
                    <button className="expense-toggle-button" onClick={toggleExpenses}>Expenses</button>
                </div>
            </div>
            
            <div className={`living-expense ${expensesVisible ? 'visible' : 'hidden'}`}>
                <img src={HomeImage} alt="Home"/>
                <div className="living-title">Living</div>
                <div className="living-cost">$2,075.54</div>
            </div>
            
            <div className={`living-expense ${expensesVisible ? 'visible' : 'hidden'}`}>
                <img src={FoodImage} alt="Take Out"/>
                <div className="living-title">Take Out</div>
                <div className="living-cost">$504.76</div>
            </div>
            <div className={`living-expense ${expensesVisible ? 'visible' : 'hidden'}`}>
                <img src={groceriesImage} alt="Groceries"/>
                <div className="living-title">Groceries</div>
                <div className="living-cost">$1,272.31</div>
            </div>
            <div className={`living-expense ${expensesVisible ? 'visible' : 'hidden'}`}>
                <img src={ToolsImage} alt="Utilities"/>
                <div className="living-title">Utilities</div>
                <div className="living-cost">$239.63</div>
            </div>
        </div>
    </div>
    </div>
    </div>

  );
}

export default Dashboard;