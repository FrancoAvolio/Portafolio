import React from "react";
import { FaPaperPlane } from "react-icons/fa";

interface SubmitProps {
  isPending: boolean;
}

const Submit: React.FC<SubmitProps> = ({ isPending }) => {
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-70"
      disabled={isPending}
    >
      {isPending ? (
        <div className="w-4 h-4 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
};

export default Submit;
