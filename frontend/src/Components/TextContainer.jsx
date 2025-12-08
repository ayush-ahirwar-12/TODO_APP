import React from "react";
import { Pencil, Trash } from "lucide-react";

const TextContainer = ({ todo, onEdit, onDelete }) => {
  return (
    <div className="w-full mt-5 bg-gray-900 text-white p-4 rounded-md flex justify-between items-center shadow-md">
      <p className="text-lg"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus provident libero recusandae eos esse, obcaecati minima voluptatem repellat itaque, animi dolor fugit consequatur labore consequuntur? </p>

      <div className="flex gap-4">
        {/* Edit Button */}
        <button
          onClick={onEdit}
          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-md transition"
        >
          <Pencil size={18} />
        </button>

        {/* Delete Button */}
        <button
          onClick={onDelete}
          className="p-2 bg-red-600 hover:bg-red-700 rounded-md transition"
        >
          <Trash size={18} />
        </button>
      </div>
    </div>
  );
};

export default TextContainer;
