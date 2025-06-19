import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './hello-world/Container.jsx'
import HelloWorld from "./hello-world/HelloWorld.jsx";
import TodoList from "./todo-list/TodoList.jsx";
import Table from "./table/Table.jsx";
import AlertButton from "./button/AlertButton.jsx";
import Toolbar from "./button/Toolbar.jsx";
import SearchForm from "./form/SearchForm.jsx";
import SayHelloForm from "./form/SayHelloForm.jsx";
import Counter from "./form/Counter.jsx";
import ContactForm from "./contact/ContactForm.jsx";
import Task from "./task/Task.jsx";
import MyCounter from "./counter/MyCounter.jsx";
import CounterApp from "./counter/CounterApp.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Container>
          <HelloWorld />
          <TodoList />
          <Table />

          <AlertButton text="Click Me" message="Button Clicked"/>
          <Toolbar onClick={(e) => {
              e.stopPropagation();
              alert("Toolbar Clicked");
          } }/>
          <SearchForm/>
          <SayHelloForm/>

          <Counter/>
          <Counter/>

          <ContactForm/>

          <Task/>
          <MyCounter/>
          <MyCounter/>
          <CounterApp/>


      </Container>
  </StrictMode>,
)
