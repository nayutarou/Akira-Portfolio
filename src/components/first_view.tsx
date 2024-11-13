import React from "react";

// 最初の画面を設定する
const FirstView = () => {
  return (
    // 背景の設定
    <div className=" w-full bg-diagonal-stripes h-screen bg-custom-firstView flex items-center justify-center">
      <div className="h-[80vh] w-full">
        <div className="bg-text-before *:hover:bg-text-after clip-profile w-[87.8vw] h-[20vh] ml-auto mr-0 group ">
          <a href="#" className="text-gray-400 text-3xl w-full h-full flex items-center
           justify-center text-left pt-6 pb-6 tracking-widest hover:text-white
            transition-all duration-[600ms] font-first-view content-profile" ></a>
        </div>
        <div className="bg-text-before *:hover:bg-text-after clip-project w-[49vw] h-[20vh] ml-0 mr-auto group">
          <a href="#" className="text-gray-400 text-3xl w-full h-full flex items-center
           justify-center pt-6 pb-6 tracking-widest hover:text-white transition-all duration-[600ms] font-first-view" >Project</a>
        </div>
        <div className="bg-text-before *:hover:bg-text-after clip-growth w-[48vw] h-[20vh] ml-auto mr-0 group">
          <a href="#" className="text-gray-400 text-3xl w-full h-full flex items-center
           justify-center pt-6 pb-6 tracking-widest hover:text-white transition-all duration-[600ms] font-first-view" >Growth</a>
        </div>
        <div className="bg-text-before *:hover:bg-text-after clip-certifications w-[88.8vw] h-[20vh] ml-0 mr-atuo group">
          <a href="#" className="text-gray-400 text-3xl w-full h-full flex items-center
           justify-center pt-6 pb-6 tracking-widest hover:text-white transition-all duration-[600ms] font-first-view" >Certifications</a>
        </div>
      </div>
    </div>
  );
};

export default FirstView;
