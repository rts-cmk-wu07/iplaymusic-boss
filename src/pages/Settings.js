import UserProfile from "../components/subcomponents/UserProfile";

import useFetch from "../hooks/useFetch";
const Settings = () => {
  const { data, loading } = useFetch("https://api.spotify.com/v1/me");

  return (
    <section className="p-4">
      <h1 className="heading gradient-text">User Overview</h1>
      {!loading ? <UserProfile data={data} /> : <p>Loading...</p>}
    </section>
  );
};

export default Settings;
