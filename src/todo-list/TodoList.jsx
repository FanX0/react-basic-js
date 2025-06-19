import Todo from "./Todo.jsx"

export default function TodoList() {
    const datas = [
        {
            id: 1,
            text: "Learn React",
            isCompleted: true,
            isDeleted: true
        },
        {
            id: 2,
            text: "Learn Vite",
            isCompleted: false,
            isDeleted: false
        },
        {
            id: 3,
            text: "Learn JavaScript",
            isCompleted: true,
            isDeleted: false
        }
    ]

    return (
        <div>
            {datas.map((data) => (
                <Todo key={data.id} {...data} />
            ))}
        </div>
    )
}