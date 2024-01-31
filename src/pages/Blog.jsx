import React from "react";
import Image from "next/image";
import { ArrowUp } from "@/assets";
import { bolgs } from "@/constants";

const Blog = () => {
  return (
    <section className="px-24 pt-40 pb-72 bg-primary">
      <div className="flex flex-row justify-between items-center ">
        <h1 className="text-[54px] font-semibold text-white ">
          Stay Inspired
          <br />
          With Our Blog
        </h1>
        <p className="text-[18px] leading-9 text-white-100 max-w-[48rem]">
          Looking For Fashion Tips, Style Guides, And The Latest Trends? Explore
          Our Blog For Insightful Articles That Keep You Informed And Inspired.
          From Fashion-Forward Looks To Behind-The-Scenes Stories, Our Blog Is
          Your Go-To Source For All Things Trendy.
        </p>
      </div>
      {bolgs.map((blog, index) => (
        <div key={index} className="flex flex-row justify-between mt-28">
          <div className="w-[35%]">
            <span className="text-tertiary">{blog.title}</span>
          </div>

          <div className="flex flex-row justify-start space-x-6">
            <div>
              <div className="text-tertiary text-[18px] leading-7 max-w-80">
                {blog.body}
              </div>
              <Image className="w-[35.3rem] mt-14" src={blog.image_1} alt="" />
            </div>
            <div>
              <div className="flex justify-end space-x-96">
                <span className="text-tertiary text-[16px] leading-7">
                  {blog.date}
                </span>
                <a
                  href="#"
                  className="border-white-100 border-2  rounded-full p-3"
                >
                  <Image width={18} hieght={18} src={ArrowUp} alt="arrowUP" />
                </a>
              </div>
              <Image className="w-full mt-[67px]" src={blog.image_2} alt="" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Blog;
