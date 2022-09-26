import FollowedArtistsList from "../components/lists/FollowedArtistsList";

const Following = () => {
  return (
    <section className="p-2">
      <h1 className="heading gradient-text">Following</h1>
      <FollowedArtistsList startUrl="https://api.spotify.com/v1/me/following?type=artist&limit=50" loadMoreOnIndex={49} />
    </section>
  );
};

export default Following;
