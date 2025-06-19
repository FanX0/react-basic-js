
import {HeaderHelloWorld, ParagraphHelloWorld} from "./HelloWorldContent.jsx";

export default function HelloWorld() {
    const props = {
        text: "Hello World from Spread Syntax"
    }
    return (
        <div>
            <HeaderHelloWorld {...props}/>
           <ParagraphHelloWorld />
        </div>

    )
}