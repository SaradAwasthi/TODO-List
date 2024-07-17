import React, { useState } from "react";

export default function TodoFields({ handleAddButton }) {
    const [name, setItemName] = useState();
    const [dob, setItemDOB] = useState();

    const handleItemNameChange = (e) => {
        setItemName(e.target.value);
    };
    const handleItemDOBChange = (e) => {
        setItemDOB(e.target.value);
    };

    const handleOnClick = () => {
        handleAddButton(name, dob);
        setItemName("");
        setItemDOB("");
    };

    return (
        <div className="fields row">
            <div className="col-12">
                <input
                    className="col-5"
                    type="text"
                    value={name}
                    onChange={handleItemNameChange}
                    placeholder="Enter Name Here..."
                    aria-describedby="inputGroup-sizing-default"
                />
                <input
                    type="date"
                    value={dob}
                    className="col-4"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={handleItemDOBChange}
                />

                <button
                    className="col-2 btn btn-success"
                    type="button"
                    onClick={handleOnClick}
                >
                    Add
                </button>
            </div>
        </div>
    );
}
