import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-[300px] bg-black">
      <div
        class="loader border-t-4 rounded-full border-gray-600 bg-gray-400 animate-spin
        aspect-square w-20 flex justify-center items-center text-yellow-700"
      ></div>
    </div>
  );
};

export default Loading;
