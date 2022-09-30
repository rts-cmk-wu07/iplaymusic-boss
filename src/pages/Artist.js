import { useParams } from "react-router-dom";
import TopTracksList from "../components/lists/TopTracksList";

import ArtistList from "../components/lists/ArtistList";
import ArtistProfile from "../components/subcomponents/ArtistProfile";
import useFetch from "../hooks/useFetch";
import Loader from "../components/subcomponents/Loader";

const Artist = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(
    `https://api.spotify.com/v1/artists/${id}`
  );
  return (
    <>
      {!loading ? (
        <section className="p-6 flex flex-col items-center gap-4 text-additional dark:text-white">
          <>
            <ArtistProfile data={data} />
            <TopTracksList id={id} />
            <div className="mt-12 w-full">
              <h3 className="heading text-left mb-6">Related Artists</h3>
              <ArtistList
                id={id}
                startUrl={`https://api.spotify.com/v1/artists/${id}/related-artists`}
              />
            </div>
          </>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Artist;
