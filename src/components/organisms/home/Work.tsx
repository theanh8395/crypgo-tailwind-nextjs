"use client";

import WrapperImage from "@/components/atoms/WrapperImage";
import { motion } from "motion/react";
import imgWorkWithUs from "@/assets/images/work/img-work-with-us.png";

const Work = () => {
  const topAnimation = {
    initial: { y: "-100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.6, delay: 0.4 },
  };
  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  return (
    <section className="md:pt-28" id="work">
      <div className="container px-4 mx-auto lg:max-w-(--breakpoint-xl)">
        <div className="grid grid-cols-12 items-center">
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <p className="sm:text-28 text-lg text-white">
              Work with <span className="text-primary">us</span>
            </p>
            <h2 className="sm:text-40 text-30 text-white lg:w-full md:w-70% font-medium">
              Successfully launch your blockchain project.
            </h2>
          </motion.div>
          <motion.div {...topAnimation} className="lg:col-span-5 col-span-12">
            <div className="2xl:-mr-40 mt-9 flex justify-center">
              <WrapperImage
                src={imgWorkWithUs}
                alt="image"
                className="lg:w-full"
                width={600}
                height={425}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
