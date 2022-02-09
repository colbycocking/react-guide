import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.itemProps.title);

  const clickHandler = () => {
    setTitle('fuck');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          ${props.itemProps.amount}
        </div>
      </div>
      <button onClick={clickHandler}>Boom!</button>
    </Card>
  )
}