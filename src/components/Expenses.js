import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

export default function Expenses() {
  const expenseDate = new Date(2022, 2, 28);
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <Card className="expenses">
      <ExpenseItem date={expenseDate} itemProps={expenses[0]}/>
      <ExpenseItem date={expenseDate} itemProps={expenses[1]}/>
      <ExpenseItem date={expenseDate} itemProps={expenses[2]}/>
    </Card>
  )
}
