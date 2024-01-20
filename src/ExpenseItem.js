import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function App(props) {
  const clickhandler = () => {
    console.log('hello');
  };

const clickdelete =()=>{
    console.log(`deleting the expenses "${props.title}"`);
}
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickhandler}>Click me</button>
      <button onClick={clickdelete}>Click me</button>
    </div>
  );
}

export default App;
