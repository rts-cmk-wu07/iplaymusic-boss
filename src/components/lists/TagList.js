import Tag from "../subcomponents/Tag"
const TagList = (props) => {
  const { tags } = props
  return (
    <ul className="flex gap-3 overflow-y-hidden overflow-x-scroll whitespace-nowrap pb-6">
      {tags.map((tag, i) => (
        <Tag key={i} content={tag} />
      ))}
    </ul>
  )
}

export default TagList
