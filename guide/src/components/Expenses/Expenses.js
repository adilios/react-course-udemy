import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card.js/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((exp) => (
        <ExpenseItem
          id={exp?.id}
          title={exp?.title}
          amount={exp?.amount}
          date={exp?.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
