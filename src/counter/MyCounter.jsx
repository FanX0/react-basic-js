import {useState} from "react";

export default function MyCounter({name}) {
    const [count, setCount] = useState(0)

    function handleClickIncrement(){
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Counter {name}</h1>
            <button onClick={handleClickIncrement}>+</button>
            <p>{count}</p>
        </div>
    )
}