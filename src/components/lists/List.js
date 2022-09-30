const List = ({ children, gap }) => {
  return <ul className={`flex w-full ${gap || "gap-2"} flex-col`}>{children}</ul>;
};

export default List;
