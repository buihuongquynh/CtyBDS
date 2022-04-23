// @flow
import * as React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Slider from "react-slick";

const MobileHome = ({ src, items }) => {
  const router = useRouter();
  console.log(items,"items")
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    // infinite: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    {
      src.length > 0 &&
    
      <Slider {...settings}>
        {src &&
          src?.map((item, index) => (
            <div
              onClick={() =>
                router.push({
                  pathname: "/list-img-project",
                  query: {
                    ids: items?.id,
                    id: items?.project[0]?.id,
                  },
                })
              }
              className="img_home"
            >
              <img className="img_fixed" src={item} alt="" />
            </div>
          ))}
      </Slider>
      }
    </>
  );
};
export default MobileHome;
