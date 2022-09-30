import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const expenses = props.props;

  console.log(expenses[0].date);

  return expenses.map((exp) => (
    <div className="expense-item" key={exp?.id}>
      <div>
        <ExpenseDate date = {exp?.date}/>
      </div>
      <div className="expense-item__description">
        <h2>{exp?.title}</h2>
        <div className="expense-item__price">{exp?.amount}$</div>
      </div>
    </div>
  ));
};

export default ExpenseItem;
