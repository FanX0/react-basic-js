import "./HelloWorld.css"

export function HeaderHelloWorld({text = "Default Text"}) {
    return (
        <h1 className="title" >{text}</h1>
    );
}

export function ParagraphHelloWorld() {
    const text = "Hello World";
    return (
        <p className="content">{text.toUpperCase()}</p>
    );
}
