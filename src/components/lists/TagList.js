import Tag from "../subcomponents/Tag";
const TagList = () => {
  const Tags = [
    { id: 1, content: "#spotify" },
    { id: 2, content: "#music" },
    { id: 3, content: "#lofi" },
    { id: 4, content: "#chill" },
    { id: 5, content: "#jazz" },
    { id: 6, content: "#rock" },
    { id: 7, content: "#pop" },
    { id: 8, content: "#hip-hop" },
    { id: 9, content: "#rap" },
    { id: 10, content: "#edm" },
  ];
  return (
    <ul className="flex gap-3 overflow-y-hidden overflow-x-scroll whitespace-nowrap pb-6">
      {Tags.map((tag) => (
        <Tag key={tag.id} content={tag.content} />
      ))}
    </ul>
  );
};

export default TagList;
