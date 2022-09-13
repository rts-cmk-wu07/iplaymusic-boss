const Welcome = () => {
  return (
    <div className="z-40 w-screen h-screen fixed inset-0 bg-white dark:bg-additional flex flex-col items-center justify-center ">
      <svg id="music-logo-solid" width="200" height="215.963" viewBox="0 0 200 215.963">
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#ee0979" />
            <stop offset="1" stopColor="#ff6a00" />
          </linearGradient>
        </defs>
        <circle id="Ellipse_16" data-name="Ellipse 16" cx="12.8" cy="12.8" r="12.8" transform="translate(0 25.763)" fill="url(#linear-gradient)" />
        <path
          id="Path_650"
          data-name="Path 650"
          d="M62.9,52.9l41.5,24a12.579,12.579,0,0,1,0,21.8l-41.5,24a12.536,12.536,0,0,1-18.8-10.9v-48A12.5,12.5,0,0,1,62.9,52.9Z"
          transform="translate(7.646 12.498)"
          fill="url(#linear-gradient)"
        />
        <path
          id="Path_651"
          data-name="Path 651"
          d="M29.215,82.985A14.505,14.505,0,0,0,14.913,68.2,14.6,14.6,0,0,0,.5,82.985V179.09c0,15.016,5.922,27.145,16.2,33.267A28.763,28.763,0,0,0,31.785,216.4c6.7,0,13.855-2.079,20.894-6.238L183.07,132.308a36.473,36.473,0,0,0,.112-62.145L70.668,2.473A13.994,13.994,0,0,0,51.115,7.787,15,15,0,0,0,56.254,28L128.992,71.78a36.207,36.207,0,0,1,14.749,29.455,35.751,35.751,0,0,1-13.184,28.185L77.707,160.955a33.644,33.644,0,0,1-31.4-1.733c-10.726-6.353-16.872-17.673-17.095-30.379Z"
          transform="translate(-0.5 -0.437)"
          fill="url(#linear-gradient)"
        />
      </svg>
      <h2 className="heading mt-12">iPlayMusic</h2>
    </div>
  );
};

export default Welcome;
