"use client";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const TabsComponent = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();
  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div
      className="
        bg-slate-700
        flex justify-center items-center
        flex-col
        pt-3
        "
    >
      <div
        className="
          flex flex-col 
          w-full"
      >
        <div
          className="
            px-2 py-0
            flex justify-between items-center
            gap-x-2
            rounded-xl
            overflow-auto"
        >
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`
                ${selectedTab === index ? 

                "bg-slate-500 \
                rounded-t-md p-2 \
                max-w-[20vw] \
                " : 

                "bg-lime-500 \
                p-0 w-[20vw] \
                rounded-md"
                }
                min-w-[140px]
                outline-none
                text-center 
                hover:bg-blue-300`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${selectedTab === index ? "bg-slate-500" : "hidden"}`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;

TabsComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
