import { BackPage } from "../assets/assets";
import NewsPage from "../components/NewsPage";
import PageTitle from "../components/PageTitle";
import Read from "../components/Read";
import { useState } from "react";

const Back = () => {
  
  const [ReadNews, setReadNews] = useState(null);

  const handleReadNews = (news) => {
    setReadNews(news);
  };

  const handleCloseRead = () => {
    setReadNews(null);
  };

  return (
    <div className="flex flex-col gap-6 px-10">
      <PageTitle title={"Back Page"} />
      {BackPage.map((news, index) => (
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

export default Back;
