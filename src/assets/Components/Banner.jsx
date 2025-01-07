import bannerImage from "../../assets/comunity.jpg"

const Banner = () => {
    return (
        <div className="lg:flex gap-5 items-center my-10 lg:my-20 p-5 lg:p-10 space-y-5   bg-[#F6EDE7] rounded-xl">
            <div>
                <img className="rounded-xl " src={bannerImage} alt="" />
            </div>
            <div>
                <h1 className="lg:text-5xl text-3xl font-bold  mb-5 lg:mb-10">Together, We Make Dreams Come True!</h1>
                <p className="lg:text-xl ">Empower ideas, support causes, and create a brighter future—one contribution at a time.This text highlights the spirit of collaboration, aligns with the image, and inspires action.</p>
            </div>
        </div>
    );
};

export default Banner;