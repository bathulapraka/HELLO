import React from "react";
import { useState } from "react";

const ExpenseUser = () => {
  const [enteredtitle, setTtle] = useState("");
  const [enterAmount, setAmount] = useState("");
  const [enterDate, setDate] = useState("");

  const settitleoftheuser = (event) => {
    setTtle(event.target.value);
    console.log(enteredtitle);
  };
  const setAmountoftheuser = (event) => {
    setAmount(event.target.value);
    console.log(enterAmount);
  };
  const setDateoftheuser = (event) => {
    setDate(event.target.value);
    console.log(enterDate);
  };
  const submithandle = () => {
  
    console.log(enteredtitle);
    console.log(enterAmount);
    console.log(enterDate);
  };
  return (
    <form>
      <div className="all-details">
        <div className="sub-details">
          <label>Title</label>
          <input type="text" onChange={settitleoftheuser} />
        </div>
        <div className="sub-details">
          <label>Amount</label>
          <input
            type="number"
            min="0.002"
            max="0.004"
            onChange={setAmountoftheuser}
          />
        </div>
        <div className="sub-details">
          <label>Date</label>
          <input
            type="date"
            min="2010-9-10"
            max="2015-6-8"
            onChange={setDateoftheuser}
          />
        </div>
      </div>
      <button onClick={submithandle}>Submit</button>
    </form>
  );
};

export default ExpenseUser;
