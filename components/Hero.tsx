"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";
const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Save on Mac or IPad for college.</h1>
        <p className="hero__subtitle">Plus get a gift card up to $150.</p>
        <CustomButton
          title="Shop now >"
          containerStyle="text-blue-700"
          handleClick={() => {
            handleScroll;
          }}
        />
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero-macbook.png" layout="responsive"  width={1000} height={300} className="object-contain mix-blend-multiply" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
