import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import ProfileApp from "./ProfileApp.jsx";


createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <ProfileApp/>
        </StrictMode>
    )