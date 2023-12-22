import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const TabsComponent = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();
  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`${selectedTab === index ? "" : "" }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${selectedTab === index ? "" : ""}`}
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
