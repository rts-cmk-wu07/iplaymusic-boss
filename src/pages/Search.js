import useFetch from "../hooks/useFetch"

const Search = () => {
  const { data, loading, error } = useFetch(
    "https://api.spotify.com/v1/search?type=album&q=hej&include_external=audio"
  )
  console.log(data)
  return <div></div>
}

export default Search
