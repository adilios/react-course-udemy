import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    {
      const expenseData = {
        ...enteredExpenseData,
        id: (Math.random() * 100).toFixed(0).toString(),
      };

      props.onAddExpense(expenseData);
    }
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
