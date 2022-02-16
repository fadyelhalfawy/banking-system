import {useState} from "react";
import {FaChevronLeft, FaChevronRight, FaGithub} from "react-icons/fa";
import person from "../service/Data";

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
        <article className={"review"}>

            <div className={"img-container"}>
                <img src={image} alt={name} className={"person-img"}/>
                <span className={"quote-icon"}>
                    <FaGithub/>
                </span>
            </div>
            <h2 className={"author"}>{name}</h2>
            <h3 className={"job"}>{job}</h3>
            <p className={"info"}>{text}</p>
            <div>
                <button className={"prev-btn"} onClick={() => prevReview(index)}>
                    <FaChevronLeft/>
                </button>

                <button className={"next-btn"} onClick={() => nextReview(index)}>
                    <FaChevronRight/>
                </button>
            </div>

            <button className={"random-btn"} onClick={() => randomReview(index)}>Surprise Me</button>

        </article>
    );
};