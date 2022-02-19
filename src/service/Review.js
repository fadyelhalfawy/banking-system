import {useState} from "react";
import {FaChevronLeft, FaChevronRight, FaGithub} from "react-icons/fa";
import person from "../service/Data";
import classes from "../modules/about-us.module.css";

export const Review = () => {

    const [index, setIndex] = useState(0);
    const {name, job, text, image} = person[index];

    const checkNumber = number => {
        if (number > person.length - 1 || number < 0) return 0;

        return number;
    };

    const nextReview = index => setIndex(checkNumber(index + 1));

    const prevReview = index => setIndex(checkNumber(index - 1));

    const randomReview = index => {
        const random = Math.floor(Math.random() * person.length);
        if (random === index) return setIndex(checkNumber(random + 1));
        return setIndex(random);
    };

    return (
        <article className={classes.review}>

            <div className={classes['img-page']}>
                <img src={image} alt={name} className={classes['person-img']}/>
                <span className={classes['quote-icon']}>
                    <FaGithub/>
                </span>
            </div>
            <h2 className={classes.author}>{name}</h2>
            <h3 className={classes.job}>{job}</h3>
            <p className={classes.info}>{text}</p>
            <div>
                <button className={classes['prev-btn']} onClick={() => prevReview(index)}>
                    <FaChevronLeft/>
                </button>

                <button className={classes['next-btn']} onClick={() => nextReview(index)}>
                    <FaChevronRight/>
                </button>
            </div>

            <button className={classes['random-btn']} onClick={() => randomReview(index)}>Surprise Me</button>

        </article>
    );
};