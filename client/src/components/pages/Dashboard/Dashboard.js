import React, { useState } from 'react';
import './Dashboard.css';
import groceriesImage from './png/grocery-store-groceries-svgrepo-com.svg';
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
      ]);

      //reminders
      const addReminder = (text) => {
        const newReminder = { id: reminders.length + 1, text, completed: false };
        setReminders([...reminders, newReminder]);
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