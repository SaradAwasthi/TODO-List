import React from "react";
import styles from "./todo-lists.module.css";
import { MdDelete } from "react-icons/md";

export default function TodoLists({ todoLists, handleDeleteButton }) {
    return (
        <>
            {todoLists.map((todolist, index) => {
                return (
                    <ul key={index} className="list-group list-group-horizontal-sm ">
                        <li className={`list-group-item ${styles.listItem} list`}>
                            <span className={`${styles.span}`}>{todolist?.name}</span>
                            <span className={`${styles.span}`}>{todolist?.dob}</span>
                            <button
                                className={`btn btn-danger ${styles.roundedButton}`}
                                onClick={() => handleDeleteButton(todolist?.name)}
                            >
                                <MdDelete />
                            </button>
                        </li>
                    </ul>
                );
            })}
        </>
    );
}
