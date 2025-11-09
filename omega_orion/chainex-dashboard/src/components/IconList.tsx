import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Item = {
  icon: IconDefinition;
  title: string;
};

interface IconListProps {
  items: Item[];
}

const IconList: React.FC<IconListProps> = ({ items }) => {
  return (
    <div>
      <ul className="gap-2">
        {items.map((item, index) => {
          const { icon, title } = item;
          return (
            <li
              key={`list_${title}_${index}`}
              className={title === "Dashboard"? "sideNav-btn  sideNav-btn-hover cursor-default":"sideNav-btn hover:sideNav-btn-hover"}
            >
              <FontAwesomeIcon icon={icon} />
              <span>{title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IconList;
