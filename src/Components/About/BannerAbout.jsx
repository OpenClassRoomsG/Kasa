import React from 'react';
import ImageSource2 from '../../assets/Images/Image-source-2.jpg'; 
import '../../Components/About/bannerAbout.css'

function BannerAbout() {
  return (
    <div className="banner-about" style={{ backgroundImage: `url(${ImageSource2})`}}>
      
    </div>
  );
}

export default BannerAbout;
