import React from "react";
import classes from "../modules/home.module.css";
import image from "../images/bank2.jpg";

export const Home = () => {
    return(
        <div className={classes.page}>
            <img src={image} alt="Bank" />
            <div className={classes.content}>
                <h1>
                    Welcome to our Bank System!
                    <span></span>
                </h1>
                <p>We are the biggest Bank in the world!</p>
                <a
                    href='/about-us'
                    className={classes['btn-custom']}
                >
                    Learn More
                </a>{' '}
            </div>
        </div>
        )
};