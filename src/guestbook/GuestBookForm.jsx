export default function GuestBookForm({ref, name, setName}) {
    return (
        <div>
            <input ref={ref}
                   value={name}
                   onChange={(e) => setName(e.target.value)} />
        </div>
    )
}