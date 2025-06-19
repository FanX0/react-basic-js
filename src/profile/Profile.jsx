import {useContext} from "react";
import {ProfileContext} from "./ProfileContext.jsx";

export default function Profile() {
    const profile = useContext(ProfileContext);
    return (
        <div>
            <h1>Profile</h1>
            <p>Nama {profile}</p>
        </div>
    );
}