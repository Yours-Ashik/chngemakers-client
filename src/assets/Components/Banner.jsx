import bannerImage from "../../assets/comunity.jpg"

const Banner = () => {
    return (
        <div className="lg:flex gap-5 items-center my-10 lg:my-20 p-2 lg:p-5 border-2 border-gray-400 rounded-xl">
            <div>
                <img className="rounded-xl" src={bannerImage} alt="" />
            </div>
            <div>
                <h1 className="text-5xl font-bold  mb-5 lg:mb-10">Together, We Make Dreams Come True!</h1>
                <p className="text-xl text-gray-400 font-bold ">Empower ideas, support causes, and create a brighter future—one contribution at a time.This text highlights the spirit of collaboration, aligns with the image, and inspires action.</p>
            </div>
        </div>
    );
};

export default Banner;