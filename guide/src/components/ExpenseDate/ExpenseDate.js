const ExpenseDate = ({props}) => {


  const month = (value) => {
    return value.toLocaleString("en-US", { month: "long" });
  };
  
  const day = (value) => {
    return value.toLocaleString("en-US", { day: "2-digit" });
  };

  const year = (value) => {
    return value.getFullYear();
  };

  return (
    <>
      <div>{month(props)}</div>
      <p>{day(props)}</p>
      <p>{year(props)}</p>
    </>
  );
};

export default ExpenseDate;
