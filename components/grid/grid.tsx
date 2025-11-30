import React from "react";
import DefaultImage from "../../types/DefaultImage";
import Card from "../card/card";

interface GridProps {
  slugPrefix?: string;
  title?: string;
  large?: boolean;
  items: {
    title: string;
    subtitle: string;
    image: DefaultImage;
    href: string;
    noPadding: boolean;
  }[];
}

const Grid: React.FC<GridProps> = ({ items, title, slugPrefix, large }) => {
  return (
    <div className="w-full py-6">
      {title && (
        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {items.map((item, i) => (
          <Card
            key={`card-${i}`}
            {...item}
            slugPrefix={slugPrefix}
            large={large}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
