import React, { useRef } from "react";
import { MdOutlineNoteAdd } from "react-icons/md";

export default function TodoFieldsUsingUseRefHook({ onAddButton }) {
    const todoName = useRef(null);
    const dueDate = useRef(null);

    const handleAddButton = () => {
        onAddButton(todoName.current.value, dueDate.current.value);
        todoName.current.value = "";
        dueDate.current.value = "";
    };

    return (
        <>
            <div className="row todoFields">
                <input
                    type="text"
                    ref={todoName}
                    placeholder="Enter Todo Here..."
                    className="col-6 inputText"
                />
                <input type="date" ref={dueDate} className="col-4 inputDate" />
                <button onClick={handleAddButton} className="btn btn-success col-1">
                    <MdOutlineNoteAdd />
                </button>
            </div>
        </>
    );
}
