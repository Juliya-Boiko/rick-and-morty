import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ScrollTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const visibilityHandler = () => {
      window.pageYOffset > 300 ? setShowBtn(true) : setShowBtn(false); 
    };
    window.addEventListener('scroll', visibilityHandler);
    return () => {
      window.removeEventListener('scroll', visibilityHandler);
    };
  }, []);

  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showBtn &&
        <button type="button" className="scroll-top" onClick={scrollHandler}>
          <AiOutlineArrowUp size="30"/>
        </button>
      }
    </>
  );
};