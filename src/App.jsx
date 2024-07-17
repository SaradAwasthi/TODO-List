import { useState } from "react";
import "./App.css";
import TodoFields from "./components/todo-fields-using-useState-hook";
import TodoLists from "./components/todo-lists";
import WelcomeMessage from "./components/welcome-message";
import TodoFieldsUsingUseRefHook from "./todo-fields-using-useRef-hook";

function App() {
    const [TodoItem, setAddTodoItem] = useState([]);

    const handleAddButton = (itemName, itemDOB) => {
        console.log("Clicked Add button");
        console.log(`Item Added Name is ${itemName} and DOB is : ${itemDOB}`);
        const response = [
            ...TodoItem,
            {
                name: itemName,
                dob: itemDOB,
            },
        ];
        setAddTodoItem(response);
    };

    const handleDeleteButton = (itemName) => {
        const newFilteredItems = TodoItem.filter(
            (item) => item.name !== itemName && TodoItem
        );
        setAddTodoItem(newFilteredItems);
    };

    return (
        <div className="container">
            <div className="todoPage">
                <h1 className="heading">TODO Lists</h1>
                <hr />
                <TodoFieldsUsingUseRefHook onAddButton={handleAddButton} />
                {/* <TodoFields handleAddButton={handleAddButton} /> */}
                {TodoItem.length === 0 && <WelcomeMessage />}
                <TodoLists todoLists={TodoItem} handleDeleteButton={handleDeleteButton} />
            </div>
        </div>
    );
}

export default App;
