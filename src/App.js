import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm";
import ExpenseFilter from "./ExpenseFilter";
import OtherComponent from "./OtherComponent";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "bike repair",
      amount: 198.56,
      date: new Date(2020, 1, 6),
    },
    {
      id: "e2",
      title: "medicals",
      amount: 2890.56,
      date: new Date(2020, 3, 19),
    },
    {
      id: "e3",
      title: "dinner",
      amount: 2890.56,
      date: new Date(2010, 3, 19),
    },
  ];

  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <div>
      <ExpenseFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseForm />

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      <OtherComponent selectedYear={selectedYear} />
    </div>
  );
};

export default App;
