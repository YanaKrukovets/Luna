import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const MobileSubmenu = ({ isSubmenu, setIsSubmenu, submenu }) => {
  const [height, setHeight] = useState("0px");
  const item = useRef(null);
  const [reveal, setReveal] = useState(false);

  return (
    <div
      className="sub-menu-wrapper xmd:ml-0"
      onMouseLeave={() => setIsSubmenu(false)}
    >
      <div
        type="button"
        onClick={() => {
          setIsSubmenu(!isSubmenu);
          setReveal(!reveal);
          setHeight(isSubmenu ? "0px" : `${item.current.scrollHeight}px`);
        }}
        className={`text-left text-gray text-[18px] leading-[28px] flex justify-between py-[18px] border-b-[1px] border-lightGray`}
      >
        <div
          className={`desktop-nav-text block px-0 bg-white`}
          dangerouslySetInnerHTML={{
            __html: submenu.label,
          }}
        ></div>
        <div className="w-[12px] h-[12px] my-auto relative bottom-1">
          {!isSubmenu ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </div>
      </div>

      <div
        className={`overflow-hidden duration-300 max-h-[${height}] xmd:max-h-full`}
        ref={item}
        /* style={{ maxHeight: `${height}` }}*/
      ></div>
    </div>
  );
};

export default MobileSubmenu;
