import { React, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Carousel = ({ location, images }) => {
  const [width, setWidth] = useState(0);
  const [click, setClick] = useState(false);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.section
      id="carousel"
      ref={carousel}
      className="cursor-grab overflow-hidden relative my-5"
      whileTap={{ cursor: "grabbing" }}
    >
      <h2 className="px-5 text-xl uppercase font-semibold absolute top-0">
        {location}
      </h2>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {images.map((image, index) => (
          <motion.div
            className="min-h-[30rem] min-w-[20rem] py-8 px-4"
            key={index}
            onClick={() => setClick(!click)}
          >
            <img
              src={image}
              alt="photos de la maison"
              className="w-full h-full rounded-lg object-cover cursor-pointer"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Carousel;
