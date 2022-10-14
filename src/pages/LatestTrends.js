import TrendsList from "../components/lists/TrendsList";
const LatestTrends = () => {
  return (
    <section className="p-6">
      <h1 className="heading gradient-text mb-4">Latest Trends</h1>
      <TrendsList startUrl="https://api.spotify.com/v1/browse/new-releases?country=US&limit=4" loadMoreOnIndex={3} />
    </section>
  );
};

export default LatestTrends;
