"use client";

import { CtButton, CtLink } from "@/components/atoms";
import WrapperImage from "@/components/atoms/WrapperImage";
import { motion } from "motion/react";
import icon from "@/assets/images/icons/icon-bag.svg";
import playStore from "@/assets/images/hero/playstore.png";
import appStore from "@/assets/images/hero/applestore.png";
import bannerImage from "@/assets/images/hero/banner-image.png";
import CardSlider from "./CardSlider";

const HeroSection = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };
  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <motion.div {...leftAnimation} className="lg:col-span-5 col-span-12">
            <div className="flex gap-6 items-center lg:justify-start justify-center mb-5 mt-24">
              <div className="w-10 aspect-square relative">
                <WrapperImage src={icon} alt="icon" fill />
              </div>
              <p className="text-white sm:text-28 text-lg mb-0">
                Crypto On The <span className="text-primary">Go</span>
              </p>
            </div>
            <h1 className="font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white mb-10">
              Buy and Sell <span className="text-primary">Crypto</span> of your{" "}
              <span className="text-primary">choice</span>!
            </h1>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <CtButton
                fullWidth={false}
                color="primary"
                className="text-xl px-7"
              >
                Buy Crypto
              </CtButton>
              <CtButton
                fullWidth={false}
                color="primary"
                variant="bordered"
                className="text-xl px-7"
              >
                Sell Crypto
              </CtButton>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-12 mt-20">
              <CtLink href="#" className="hover:scale-110 duration-300">
                <WrapperImage
                  alt="Play Store"
                  src={playStore}
                  width={240}
                  height={70}
                />
              </CtLink>
              <CtLink href="#" className="hover:scale-110 duration-300">
                <WrapperImage
                  alt="Play Store"
                  src={appStore}
                  width={240}
                  height={70}
                />
              </CtLink>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="col-span-7 lg:block hidden"
          >
            <div className="ml-20 -mr-64">
              <WrapperImage
                src={bannerImage}
                alt="Banner"
                width={1150}
                height={1150}
              />
            </div>
          </motion.div>
        </div>
        <CardSlider />
      </div>
      <div className="absolute w-200 h-200 bg-linear-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  );
};

export default HeroSection;
