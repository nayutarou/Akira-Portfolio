import { useEffect, useRef, useState } from "react";

const Bord: React.FC = () => {
  const [text, setText] = useState('');
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([scroll]) => {
        if (scroll.isIntersecting) {
          setText("Profile")
        }else{
          setText("")
        }
      },
      {
        threshold: 0.5,//50%見えたら表示
      }
    );
    // profileRef.currentがnullでない場合
    if (profileRef.current) {
      // profileRef.currentが参照している要素を呼び出す
      observer.observe(profileRef.current);
    }
    // リリースやリスナーの解除
    return () => {
      if (profileRef.current) {
        // 監視を解除するコード
        observer.unobserve(profileRef.current);
      }
    };
  },[]);//依存配列

  return (
    <div ref={profileRef} className="mb-10 h-[15vh] w-[15vw] mx-auto">
      <div className="h-[10vh] border-black border-r-2 w-1 mx-auto"></div>
      <div className="h-[5vh] w-full bg-custom-bord bg-custom-universal">
        <p className="m-0 w-full h-full text-center">{text}</p>
      </div>
    </div>
  );
};

export default Bord;
