const Loader = () => {
  return (
    <div className="loader spin mx-auto mt-12 col-start-1 col-end-8">
      <div className="spin__blocker dark:bg-secondary bg-white"></div>
      <div className="spin__bottom-left"></div>
      <div className="spin__bottom-right"></div>
      <div className="spin__top-left"></div>
    </div>
  );
};

export default Loader;
