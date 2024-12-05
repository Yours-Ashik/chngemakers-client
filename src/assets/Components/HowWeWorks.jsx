import image from "../../assets/buld.jpg"
const HowWeWorks = () => {
    return (
        <div
            className="hero min-h-screen rounded-xl overflow-hidden"
            style={{
                backgroundImage: `url(${image})`,
                
            }}>
            <div className="hero-overlay bg-opacity-80 "></div>
            <div className="hero-content text-neutral-content text-center" >
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Theres the information how we works</h1>
                    <p className="mb-5 font-semibold ">
                        1. Spark the Idea
                        It all starts with a brilliant idea. Whether it’s a personal cause, a creative project, or a startup dream, we help you bring it to life. <br />
                        2. Share Your Vision
                        Create a campaign, share your story, and inspire others to contribute. Our platform connects your vision with a supportive community. <br />
                        3. Empower Through Contributions
                        Watch your idea grow as people from around the world support your campaign. Every contribution makes a difference. <br />
                        4. Achieve Together
                        Celebrate milestones and achieve success with your backers. Together, we make ideas a reality!
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default HowWeWorks;