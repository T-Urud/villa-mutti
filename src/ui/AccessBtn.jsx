import React from "react";

const AccessBtn = ({ content }) => {
  return (
    <button className="btn bg-transparent border-[#fbfaf0] text-[#fbfaf0] text-lg hover:bg-[#fbfaf0e7] hover:text-[#27201e]">
      {content}
    </button>
  );
};

export default AccessBtn;
