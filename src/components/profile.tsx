// components/profile.tsx
import React from "react";
import Bord from "./bord";


const Profile: React.FC = () => {
  return (
    <div className="h-screen bg-custom-universal bg-fixed">
        <Bord />
      <div className="flex justify-center items-center ">
        <div className="flex justify-center items-center">
          {/* 題名じゃないけどそんな感じのやつ */}
          <div className="bg-text-profile mr-8 w-32 pt-5 pb-8 text-center h-[63vh] mt-custom">
            <p>名前</p>
            <p>職業</p>
            <p>所属先</p>
            <p>年齢</p>
            <p className="h-[12vh]">自己紹介</p>
            <p>言語</p>
            <p>フレームワーク</p>
            <p>データベース</p>
            <p>ツール</p>
          </div>
          {/* 内容 */}
          <div className="bg-text-profile  w-[33vw] pt-5 pb-8 px-8 text-center h-[63vh] mt-custom">
            <p>大野哲</p>
            <p>学生</p>
            <p>MCL盛岡情報ビジネス&デザイン専門学校</p>
            <p>20</p>
            <p className="text-left h-[12vh]">
              専門学校でITの事を学び始めて二年弱が立ち、
              一年生ではjava,HTML,cssなどを学び 現在はPythonとC言語を学んでいる
            </p>
            <p>java,HTML,CSS,PHP,Python</p>
            <p>Bootstrap,Tailwindcss,React</p>
            <p>MySQL,SQLite</p>
            <p>XAMPP,GitHub,VSCode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
