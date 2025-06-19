import {useState} from "react";

export default function Counter() {
    let [count, setCount] = useState(0)
    function handleClickIncrement(){
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
    }
    function handleClickDecrement(){
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        console.log(count);
    }

    return (
        <div>
            <button onClick={handleClickIncrement}>+3</button>
            <p>{count}</p>
            <button onClick={handleClickDecrement}>-3</button>
        </div>
    )
}