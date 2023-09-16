import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  // const counter = useSelector(state => state.counter);
  // const showCounter = useSelector(state => state.showCounter);
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const increment = () => {
    // dispatch({type: 'increment'});
    dispatch(counterActions.increment());
  };

  const increaseBy5 = () => {
    // dispatch({type: 'increase', amount: 5 })
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
  };

  const decrement = () => {
    // dispatch({type: 'decrement'});
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({type: 'toggle'});
    dispatch(counterActions.toggleCounter());
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