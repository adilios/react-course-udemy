import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../UI/Card.js/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  console.log(props.date);

  return (
    <Card className="expense-item" key={props?.id}>
      <div>
        <ExpenseDate date = {props?.date}/>
      </div>
      <div className="expense-item__description">
        <h2>{props?.title}</h2>
        <div className="expense-item__price">{props?.amount}$</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
