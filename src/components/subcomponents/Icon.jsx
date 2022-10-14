import { createElement } from "react";
import * as Ion from "react-icons/io5";

const Icon = (props) => {
  const { iconName, size, color } = props;
  const icon = createElement(Ion[iconName]);

  return (
    <>
      {/* Invisible SVG to apply gradient on icon with css */}
      <svg className="absolute invisible" width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#FF6A00" offset="0%" />
          <stop stopColor="#EE0979" offset="100%" />
        </linearGradient>
      </svg>
      <i style={{ fontSize: size, color: color }}>{icon}</i>
    </>
  );
};

export default Icon;
