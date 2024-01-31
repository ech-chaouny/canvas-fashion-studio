import React from "react";

const Footer = () => {
  return (
    <div className="px-24 py-32 flex flex-row justify-between">
      <div>
        <span className="font-dmitry font-bold text-2xl tracking-[-0.07em] text-primary">
          Canvas
        </span>
        <p className="text-[#4f4f4f] mt-12 text-[15px]">
          Step Into A World Where Innovation Meets
          <br />
          Trendsetting, And Discover A Curated
          <br />
          Collection That Redefines Contemporary
          <br />
          Fashion.
        </p>
      </div>
      <div className="flex flex-row gap-28">
        <div className="flex flex-col">
          <h3 className="text-2xl font-medium mb-12 text-primary">About Us</h3>
          <a className="mb-3 text-[#4f4f4f]" href="">
            About Us
          </a>
          <a className="mb-3 text-[#4f4f4f]" href="">
            Careers
          </a>
          <a className="mb-3 text-[#4f4f4f]" href="">
            Feature Plan
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-medium mb-12 text-primary">Help</h3>
          <a className="mb-3 text-[#4f4f4f]" href="">
            Call Center
          </a>
          <a className="mb-3 text-[#4f4f4f]" href="">
            FAQ
          </a>
          <a className="mb-3 text-[#4f4f4f]" href="">
            Blog
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-medium mb-12 text-primary">Product</h3>
          <a className="mb-3 text-[#4f4f4f]" href="">
            Sustainable Fashion
          </a>
          <a className="mb-3 text-[#4f4f4f]" href="">
            Summer
          </a>
          <a className="mb-3 text-[#4f4f4f]" href="">
            Collaboration
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
