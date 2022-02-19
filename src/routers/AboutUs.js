import {Review} from "../service/Review";
import classes from "../modules/about-us.module.css";

export const AboutUs = () => {
        return (
            <main className={classes['center-main']}>
                <section className={classes.page}>
                    <div className={classes.title}>
                        <h2>CEO Of The Bank</h2>
                        <div className={classes.underline}></div>
                    </div>

                    <Review />

                </section>
            </main>
        );
};