import { useState } from "react";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

export default function Task() {
    const [items, setItems] = useState([]);

    function handleOnSubmit(item) {
        setItems([...items, item]); // menggunakan spread untuk menambahkan item baru
    }

    return (
        <div>
            <TaskForm onSubmit={handleOnSubmit} />
            <TaskList items={items} />
        </div>
    );
}
