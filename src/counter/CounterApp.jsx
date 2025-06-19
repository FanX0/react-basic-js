import {useState} from "react";
import MyCounter from "./MyCounter.jsx";

export default function CounterApp() {
    const [show, setShow] = useState(true);

    function handleClick(e){
        setShow(e.target.checked);
    }
    return (
        <div>
            {show ? <MyCounter key="1" name="1"/> : <MyCounter key="2" name="2"/>}
            <input type="checkbox" checked={show} onChange={handleClick} /> Tampilkan Counter
        </div>
    )
}