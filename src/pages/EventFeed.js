import TagList from "../components/lists/TagList"
import EventArticle from "../components/subcomponents/EventArticle"

const EventFeed = () => {
  const eventArticles = [
    {
      id: 1,
      title: "Coachella 2019 Day Three Highlights",
      image: "https://picsum.photos/id/158/300/250",
      tags: ["#spotify", "#music", "#lofi"],
      likes: 3100,
    },
    {
      id: 2,
      title: "The 10 Best Albums of 2020",
      image: "https://picsum.photos/id/158/300/250",
      tags: ["#spotify", "#music", "#lofi"],
      likes: 5200,
    },
    {
      id: 3,
      title: "The 10 Best Artists of 2020",
      image: "https://picsum.photos/id/158/300/250",
      tags: ["#spotify", "#music", "#lofi"],
      likes: 1200,
    },
    {
      id: 4,
      title: "The 10 Best Songs of 2020",
      image: "https://picsum.photos/id/158/300/250",
      tags: ["#spotify", "#music", "#lofi"],
      likes: 5281,
    },
  ]

  return (
    <div className="py-6 pl-6">
      <h1 className="heading gradient-text mb-6">Events Feed</h1>
      <TagList
        tags={[
          "#spotify",
          "#music",
          "#lofi",
          "#chill",
          "#jazz",
          "#rock",
          "#pop",
          "#hip-hop",
          "#rap",
          "#edm",
        ]}
      />
      <section className="pr-6 flex flex-col gap-6">
        {eventArticles.map((article) => (
          <EventArticle
            key={article.id}
            image={article.image}
            heading={article.title}
            tags={article.tags}
            likes={article.likes}
          />
        ))}
      </section>
    </div>
  )
}

export default EventFeed
