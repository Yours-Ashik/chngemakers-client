
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const data = useLoaderData();
    console.log(data)
    const { title, image, type, description, amount, deadline, _id } = data



    return (
        <div
            className="hero min-h-screen my-10 lg:my-20"
            style={{
                backgroundImage: `url(${image})`,
            }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5 text-xl ">
                        Description : {description}
                    </p>
                    <p className="mb-5 text-xl">
                        Campaign Type : {type}
                    </p>
                    <p className="mb-5 text-xl">
                        Deadline : {deadline}
                    </p>
                    <p className="mb-5 text-xl">
                        Minimum Amount : {amount}
                    </p>

                </div>
            </div>
        </div>
    );
};
export default Details