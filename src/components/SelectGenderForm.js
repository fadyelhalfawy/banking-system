import React from "react";
import classes from "../modules/about-us.module.css";

export const SelectGenderForm = ({ id, label, clients }) => {
    return(
        <div className="form-group">
            <label className={`form-choose-label ${classes.select}`}
                   htmlFor={ id }>{label}</label>

            <select className="custom-select" required>
                {clients.map(client =>
                    <option
                        key={client.id}
                        value={client.name}>
                        {client.name}
                    </option>
                )}

            </select>
        </div>
    );
}