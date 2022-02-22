import React from "react";
import classes from "../modules/about-us.module.css";

export const SelectGenderForm = ({ id, label, clients, value, onChange }) => {
    return(
        <div className="form-group">
            <label className={`form-choose-label ${classes.select}`}
                   htmlFor={ id }>{label}</label>

            <select value={value} onChange={onChange} className="custom-select" required>
                <option defaultValue={"selected"}>Choose Client</option>
                {clients.map(client =>
                    <option
                        key={client._id}
                    >
                        {client.name}
                    </option>
                )}

            </select>
        </div>
    );
}