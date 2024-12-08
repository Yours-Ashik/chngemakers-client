import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-full rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/Y72jfzZ/DALL-E-2024-12-08-12-08-32-1-A-snowy-village-with-a-family-receiving-a-package-of-warm-clothing-and.webp"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/tm8s5Nq/DALL-E-2024-12-08-12-08-30-1-A-group-of-volunteers-distributing-winter-clothing-to-families-in-need.webp"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/vBdrdsL/DALL-E-2024-12-08-12-08-28-1-A-diverse-group-of-people-joining-hands-in-a-heart-shape-symbolizing-un.webp"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Slider;