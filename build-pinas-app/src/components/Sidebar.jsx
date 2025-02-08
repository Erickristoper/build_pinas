
import React from "react";

const Sidebar = () => {
  return (
        <div className="flex flex-col w-1/4 bg-emerald-950">
            <button class="bg-emerald-800 hover:bg-sky-700 rounded-4xl m-4 p-4">New Project</button>
            <h1 className=" text-gray-100 text-m font-bold tracking-tight">Your Projects</h1>
        </div>
  );
};

export default Sidebar;