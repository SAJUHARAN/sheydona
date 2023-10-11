import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  desc: string;
  price: string;
  onClick: () => void;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  price,
  onClick,
}) => {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <button className="p-0 border-none background-none" onClick={onClick}>
          <Image
            className="w-full h-auto cursor-pointer"
            src={img}
            width={200}
            height={300}
            alt={title}
          />
        </button>
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>

        <div className="font-bold flex gap-4">${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
