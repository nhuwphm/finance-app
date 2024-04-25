import axios from 'axios';
import API from './api';

export const getTotalIncome = async () => { 
    const response = await axios.get(API + '/calculation/total-income');
    return response.data;
}

export const getTotalExpense = async () => {
    try {
    
        const response = await axios.get(API + 'calculation/total-expense');
        return response.data;
    
    }
    catch (error) {
        console.log(error);
    }
}

export const getTotalBalance = async () => {
    const response = await axios.get(API + '/calculation/balance');
    return response.data;
}

