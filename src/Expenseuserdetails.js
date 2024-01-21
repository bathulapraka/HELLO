import React from "react";

const ExpenseUser = () => {
     const visible=(event)=>{
        console.log(event.target.value);
     }
     const submithandle=()=>{
        console.log("submission complete");
     }
  return (
    <form>
      <div className="all-details">
        <div className="sub-details">
          <label>Title</label>
          <input type="text" onChange={visible}/>
        </div>
        <div className="sub-details">
          <label>Amount</label>
          <input type="number" min="0.002" max="0.004"  onChange={visible} />
        </div>
        <div className="sub-details">
          <label>Date</label>
          <input type='date' min="2010-9-10" max="2015-6-8"  onChange={visible}/>
        </div>
      </div>
      <button onClick={submithandle}>Submit</button>
    </form>
  );
};

export default ExpenseUser;