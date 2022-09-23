import SongListItem from "../components/subcomponents/SongListItem";
import useFetch from "../hooks/useFetch";
const List = () => {
  //Placheholder array of objects for the songs list items to be mapped over in the return statement below
  const { data, loading, error } = useFetch(
    "https://api.spotify.com/v1/me/top/tracks"
  );

  console.log(data);
  return (
    <>
      {data?.items?.length > 0 ? (
        <ul className="flex flex-col gap-4 mt-4 mx-auto">
          {!loading ? (
            data.items.map((item) => (
              <SongListItem key={item.id} id={item.id} item={item} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      ) : (
        <h2 className="heading text-addition dark:text-white text-center mt-[25%]">
          There are no songs here yet :(
        </h2>
      )}
    </>
  );
};

export default List;
