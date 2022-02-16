import {Review} from "../service/Review";

export const AboutUs = () => {
        return (
            <main>
                <section className={"container"}>

                    <div className={"title"}>
                        <h2>Reviews</h2>
                        <div className={"underline"}></div>
                    </div>

                    <Review />
                </section>
            </main>
        );
};