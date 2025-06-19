export default function Todo({text, isCompleted, isDeleted = false}) {
    if(isDeleted) {
        return null
    } else {
        return (
            <div>
                <p>{text} {isCompleted && "✅"}</p>
            </div>
        )
    }
}