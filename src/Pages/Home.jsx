import React from 'react';
import Banner from "../Components/Home/Banner";
import GalleryCards from "../Components/Home/GalleryCards";
import ImgBanner from "../assets/Images/Image-source.jpg";

const Home = () => {
    return(
        <div>
            <Banner picture={ImgBanner} text={"Chez vous, partout et ailleurs"}/>
            <GalleryCards />
            </div>
    )
}

export default Home