import React from "react";
import Carousel from "../components/Carousel";
import ReturnBtn from "../ui/ReturnBtn";
import room_images from "../constant/room_images";
import outside_images from "../constant/outside_images";
import kitchen_images from "../constant/kitchen_images";
import other_images from "../constant/other_images";

const Homepage = () => {
  return (
    <main>
      <ReturnBtn />
      <Carousel location="Le jardin" images={outside_images} />
      <Carousel location="La chambre" images={room_images} />
      <Carousel location="La cuisine" images={kitchen_images} />
      <Carousel location="Le salon et le bureau" images={other_images} />
    </main>
  );
};

export default Homepage;
