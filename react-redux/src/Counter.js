import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const increment = () => {
    dispatch({type: 'increment'});
  }

  const increaseBy5 = () => {
    dispatch({type: 'increase', amount: 5 })
  };

  const decrement = () => {
    dispatch({type: 'decrement'});
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  return (
    <>
      {showCounter && <div>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increaseBy5}>Increase By 5</button>
        
      </div>
    
    </>
  );
};

export default Counter;