import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Banner = () => {
  const options = {
    items: 1,
    nav: true,
    autoplay: true,
    loop: true,
    autoplayTimeout: 2000,
    margin: 20,
    navText: [
      "<i class='custom-prev-icon'>&lt;</i>", // Left icon
      "<i class='custom-next-icon'>&gt;</i>", // Right icon
    ],
    center: true,
    responsiveRefreshRate: 10,
    dots: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  };

  return (
    <div className="relative w-full mx-auto mb-10 shadow-2xl shadow-yellow-300">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="w-full item">
          <img
            className="object-cover   w-[100%]  h-[22rem] "
            src="/images/banner.svg"
            alt="Banner 1"
            loading="eager"
          />
        </div>
        <div className="w-full item">
          <img
            className="object-cover   w-[100%]  h-[22rem] "
            src="/images/banner2.svg"
            alt="Banner 2"
            loading="eager"
          />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Banner;
