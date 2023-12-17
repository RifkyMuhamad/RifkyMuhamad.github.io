import { useState } from "react";

const Sidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        ${open ? "w-72" : "w-20"}
        h-screen
        bg-opacity-50 bg-slate-500
        flex fixed 
        top-[3.7rem] z-[9999]
      `}
    ></div>
  );
};

export { Sidebar };
