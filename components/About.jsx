import React from "react";


const About = () => {
  return (
<div class="py-16 bg-white">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-5xl">About Pic-Lab</h2>
          <p class="text-xl mt-6 text-gray-600">PICLAB is the quick and convenient ways to access to other photographer around the world and you can earn money from the selling wonder photo or giving other photographer advice services.</p>
        </div>
        <div class="lg:w-8/12">
        <img src="https://nextjs-piclab.s3.amazonaws.com/1689870334688.webp" alt="" className="rounded-xl" width="1000"/>
        </div>
      </div>
  </div>
</div>
  );
};

export default About;