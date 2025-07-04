import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddress.jsx";
import {ProfileContext} from "./ProfileContext.jsx";
import {useState} from "react";
import ProfileForm from "./ProfileForm.jsx";

export default function ProfileApp() {
    const [name, setName] = useState("Farid");
    return (
        <div>
           <ProfileContext.Provider value={name}>
                <h1> Profile App</h1>
                <ProfileForm name={name} setName={setName} />
                <Profile />
                <ProfileAddress />
           </ProfileContext.Provider>
        </div>
    );
}