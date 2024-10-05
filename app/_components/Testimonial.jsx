import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div
      className="border-[1px] rounded-lg p-3
                cursor-pointer
                hover:shadow-sm transition-all ease-in-out"
      //   key={index}
    >
      <div
        className="mt-20 border-[1px] rounded-lg p-3
                cursor-pointer
                hover:shadow-sm transition-all ease-in-out"
      >
        <Slider {...settings}>
          {data.map((d) => (
            <div
              className="border-[1px] rounded-lg p-3
            cursor-pointer hover:border-primary
            hover:shadow-sm transition-all ease-in-out"
              //   key={index}
            >
              <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>
              <div className="p-3 border-[1px] rounded-lg mt-5 bg-white h-[450px] text-black">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-xl">{d.review}</p>
              </div>
              {/* </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `john mrgan`,
    img: `/student/youtube.png`,
    review: `lore jhghjhjshfjksdfhfgkjhgfhgfhgjkfhnkgvfbfghddvflsd;jgv;lsdkv fdgdfgdfgdfgdfffffffffffffffffffffffffffffffffffffffffffffffffffff`,
  },
  {
    name: `john mrgan`,
    img: `/student/youtube.png`,
    review: `lore, jhghjhjshfjksdfhfgkjhgfhgfhgjkfhnkgvfbfghddvflsd;jgv;lsdkv`,
  },
  {
    name: `john mrgan`,
    img: `/student/youtube.png`,
    review: `lore, jhghjhjshfjksdfhfgkjhgfhgfhgjkfhnkgvfbfghddvflsd;jgv;lsdkv`,
  },
  {
    name: `john mrgan`,
    img: `/student/youtube.png`,
    review: `lore, jhghjhjshfjksdfhfgkjhgfhgfhgjkfhnkgvfbfghddvflsd;jgv;lsdkv`,
  },
  {
    name: `john mrgan`,
    img: `/student/youtube.png`,
    review: `lore, jhghjhjshfjksdfhfgkjhgfhgfhgjkfhnkgvfbfghddvflsd;jgv;lsdkv`,
  },
  {
    name: `john mrgan`,
    img: `/student/youtube.png`,
    review: `lore, jhghjhjshfjksdfhfgkjhgfhgfhgjkfhnkgvfbfghddvflsd;jgv;lsdkv`,
  },
];
export default Testimonial;
