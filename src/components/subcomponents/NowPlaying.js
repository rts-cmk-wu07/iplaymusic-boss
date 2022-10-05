/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const styles = {
  icon: css`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    span {
      width: 3px;
      height: 100%;
      background-color: #ff1168;
      border-radius: 3px;
      transform-origin: bottom;
      animation: bounce 2.2s ease infinite alternate;
      content: "";
      &:nth-of-type(2) {
        animation-delay: -2.2s;
      }

      &:nth-of-type(3) {
        animation-delay: -3.7s;
      }
    }
    @keyframes bounce {
      10% {
        transform: scaleY(0.3); /* start by scaling to 30% */
      }

      30% {
        transform: scaleY(1); /* scale up to 100% */
      }

      60% {
        transform: scaleY(0.5); /* scale down to 50% */
      }

      80% {
        transform: scaleY(0.75); /* scale up to 75% */
      }

      100% {
        transform: scaleY(0.6); /* scale down to 60% */
      }
    }
  `,
};

const NowPlaying = () => {
  return (
    <div className="" css={styles.icon}>
      <span />
      <span />
      <span />
    </div>
  );
};

export default NowPlaying;
