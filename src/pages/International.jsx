import PageTitle from "../components/PageTitle";
import NewsPage from "../components/NewsPage";
import { InternationalPage } from "../assets/assets";
import Read from "../components/Read";
import { useState } from "react";

const International = () => {
  const [ReadNews, setReadNews] = useState(null);

  const handleReadNews = (news) => {
    setReadNews(news);
  };

  const handleCloseRead = () => {
    setReadNews(null);
  };

  return (
    <div className="flex flex-col gap-6 px-10">
      <PageTitle title={"International Page"} />
      {InternationalPage.map((news, index) => (
        <NewsPage
          key={index}
          image={news.image}
          title={news.title}
          description={news.description}
          postedAt={news.postedAt}
          onClick={() => handleReadNews(news)}
        />
      ))}
      {ReadNews && (
        <Read
          onClose={handleCloseRead}
          image={ReadNews.image}
          title={ReadNews.title}
          description={ReadNews.description}
          postedAt={ReadNews.postedAt}
          postedBy={ReadNews.postedBy}
        />
      )}
    </div>
  );
};

export default International;
