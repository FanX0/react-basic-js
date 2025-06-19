export default function ProfileForm({name, setName}) {
    function handleChange(e){
        setName(e.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleChange} />
        </div>
    )
}