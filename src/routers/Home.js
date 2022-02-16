import React from "react";
import image from "../images/bank.jpg";

export const Home = () => {
    return(
        <React.Fragment>
            <div className="containers">
                <img src={image} alt="BankImage"/>
                    <div className="content">
                        <h1>Welcome to our Bank System</h1>
                        <p>We are the biggest Bank in the world!</p>
                    </div>
            </div>
        </React.Fragment>

        )
};