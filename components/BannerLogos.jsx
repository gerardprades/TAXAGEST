import React from 'react';

const BannerLogos = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-between items-center px-3 py-3 bg-white mb-10">
      <div className="w-full sm:w-1/3 max-[640px]:w-1/3 lg:w-1/5 flex justify-center pt-3">
        <img src="/assets/elmundologo.png" alt="El Mundo Logo" className="object-contain 2xl:w-[200px] xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[200px] max-[640px]:w-[150px] max-[480px]:w-[130px] max-[439px]:w-[120px] max-[379px]:w-[100px]" />
      </div>
      <div className="w-full sm:w-1/3 max-[640px]:w-1/3 lg:w-1/5 flex justify-center pt-3">
        <img src="/assets/rtvelogo.png" alt="RTVE Logo" className="object-contain 2xl:w-[200px] xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[200px] max-[640px]:w-[150px] max-[480px]:w-[130px] max-[439px]:w-[120px] max-[379px]:w-[100px]" />
      </div>
      <div className="w-full sm:w-1/3 max-[640px]:w-1/3 lg:w-1/5 flex justify-center pt-3">
        <img src="/assets/nationalgeologo.png" alt="National Geographic Logo" className="object-contain 2xl:w-[200px] xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[200px] max-[640px]:w-[150px] max-[480px]:w-[130px] max-[439px]:w-[120px] max-[379px]:w-[100px]" />
      </div>
      <div className="w-full sm:w-1/2 max-[640px]:w-1/2 lg:w-1/5 flex justify-center pt-3 max-[1023px]:pt-5">
        <img src="/assets/topdoctorslogo.png" alt="Top Doctors Logo" className="object-contain 2xl:w-[200px] xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[200px] max-[640px]:w-[180px] max-[480px]:w-[130px] max-[439px]:w-[120px] max-[379px]:w-[100px]" />
      </div>
      <div className="w-full sm:w-1/2 max-[640px]:w-1/2 lg:w-1/5 flex justify-center pt-3 max-[1023px]:pt-5">
        <img src="/assets/elsevierlogo.png" alt="Elsevier Logo" className="object-contain 2xl:w-[200px] xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[200px] max-[640px]:w-[180px] max-[480px]:w-[130px] max-[439px]:w-[120px] max-[379px]:w-[100px]" />
      </div>
    </div>
  );
};

export default BannerLogos;
