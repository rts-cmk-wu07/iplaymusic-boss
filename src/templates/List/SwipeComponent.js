/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SwipeComponent = (props) => {
  const { text, textColor, bgColor, margin } = props;

  const style = css`
    background-color: ${bgColor};
    color: ${textColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${margin};
    border-radius: 0.5rem;
  `;

  return (
    <div css={style}>
      <span>{text}</span>
    </div>
  );
};

SwipeComponent.defaultProps = {
  text: "text?...",
  textColor: "white",
  bgColor: "black",
  margin: "0",
};

export default SwipeComponent;
