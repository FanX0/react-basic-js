import { useImmer } from "use-immer";

export default function ContactForm() {
    const [contact, setContact] = useImmer({
        info: {
            name: "",
            age: "",
        },
        message: "",
    });

    function handleNameChange(e) {
        setContact(draft => {
            draft.info.name = e.target.value;
        });
    }

    function handleAgeChange(e) {
        setContact(draft => {
            draft.info.age = e.target.value;
        });
    }

    function handleMessageChange(e) {
        setContact(draft => {
            draft.message = e.target.value;
        });
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Name" onChange={handleNameChange} />
                <input type="text" placeholder="Age" onChange={handleAgeChange} />
                <input type="text" placeholder="Message" onChange={handleMessageChange} />
            </form>
            <p>{contact.info.name}</p>
            <p>{contact.info.age}</p>
            <p>{contact.message}</p>
        </div>
    );
}
