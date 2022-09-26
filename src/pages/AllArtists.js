import ArtistList from "../components/lists/ArtistList";

const AllArtists = () => {
  return (
    <section className="p-2">
      <h1 className="heading gradient-text">Your Top Artists</h1>
      <ArtistList startUrl="https://api.spotify.com/v1/me/top/artists?limit=40" loadMoreOnIndex={39} />
    </section>
  );
};

export default AllArtists;
