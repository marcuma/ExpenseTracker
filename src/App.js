import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import logo from './logo.svg';
import './App.css';


function App(props) {
        const DUMMY_EXPENSES = [
            {
                id: Math.random().toString(),
                date: new Date(2021, 2, 28),
                title: 'Car Insurance',
                amount: 294.67,
            },
            {
                id: Math.random().toString(),
                date: new Date(2021, 7, 14),
                title: 'Toilet Paper',
                amount: 94.12,
            },
            {
                id: Math.random().toString(),
                date: new Date(2021, 2, 12),
                title: 'New TV',
                amount: 799.49,
            },
            {
                id: Math.random().toString(),
                date: new Date(2021, 5, 12),
                title: 'New Desk (Wooden)',
                amount: 450.00,
            },
        ];
        const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

        const saveExpenseHandler = (enteredExpenseData) => {
            setExpenses(prevExpenses => {
                return [enteredExpenseData, ...prevExpenses];
            });


        };


  return (
      <div>
          <NewExpense onSaveExpenseData={saveExpenseHandler}/>
          <Expenses expenses = {expenses} />
      </div>
  );

}

export default App;
