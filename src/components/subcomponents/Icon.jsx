import { createElement } from "react";
import * as Ion from "react-icons/io5";

const Icon = (props) => {
  const { iconName, size, color } = props;
  const icon = createElement(Ion[iconName]);

  return <i style={{ fontSize: size, color: color }}>{icon}</i>;
};

export default Icon;
