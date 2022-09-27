import { useState } from "react"
import { FiChevronRight } from "react-icons/fi"

const SearchCard = (props) => {
  const { title, type, img } = props

  // Giving different classnames to the different types of search results
  let thing
  if (type === "artist") thing = "rounded-full"
  if (type === "track") thing = "rounded-md"

  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <li className="flex items-center">
      <div className="w-12 h-12 relative mr-2 aspect-square">
        {!isLoaded && !img && (
          <div
            className={"bg-gray-500 w-full h-full absolute z-10 " + thing}
          ></div>
        )}
        {img && (
          <img
            onLoad={() => setIsLoaded(true)}
            className={"w-full h-full absolute " + thing}
            src={img}
            alt=""
          />
        )}
      </div>
      <div className="flex flex-col whitespace-nowrap overflow-hidden w-full">
        <h1 className="text-base text-ellipsis max-w-[90%] overflow-hidden">
          {title}
        </h1>
        <p className="text-sm italic capitalize">{type}</p>
      </div>
      <p className="ml-auto text-2xl">
        <FiChevronRight />
      </p>
    </li>
  )
}

export default SearchCard
