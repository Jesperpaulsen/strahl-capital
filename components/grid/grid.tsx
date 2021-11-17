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
  }[];
}

const Grid: React.FC<GridProps> = ({ items, title, slugPrefix, large }) => {
  return (
    <div className="w-full">
      {title && (
        <div className="text-heading-xl pt-10">{title.toUpperCase()}</div>
      )}
      <div className={`grid grid-cols-2 xl:grid-cols-4 gap-5 pt-4 w-max`}>
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
