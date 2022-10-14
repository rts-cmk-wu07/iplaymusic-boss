import Tag from "../subcomponents/Tag";
const TagList = (props) => {
  const { tags, activeTag, setActiveTag } = props;
  return (
    <ul className="flex gap-3 pb-2 overflow-y-hidden overflow-x-scroll whitespace-nowrap">
      {tags.map((tag, i) => {
        if (activeTag !== null) {
          return (
            <Tag
              key={i}
              content={tag}
              activeTag={activeTag}
              setActiveTag={setActiveTag}
            />
          );
        } else {
          return <Tag key={i} content={tag} />;
        }
      })}
    </ul>
  );
};

TagList.defaultProps = {
  tags: ["Put in", "some tags"],
  setActiveTag: () => {},
};

export default TagList;
