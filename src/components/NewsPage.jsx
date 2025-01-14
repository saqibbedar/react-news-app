const NewsPage = ({ image, title, description, postedAt, onClick }) => {
  return (
    <div className="flex border-b gap-4 pb-6">
        <img
          onClick={onClick}
          src={image}
          className="h-[130px] aspect-video border object-cover object-center cursor-pointer"
          alt=""
        />
      <div className="flex flex-col justify-between">
        <div>
          <h1
            onClick={onClick}
            className="text-2xl font-bold cursor-pointer hover:text-[#d5352d]"
          >
            {title}
          </h1>
          <p className="bg-re line-clamp-2">{description}</p>
        </div>
        <div>
          <span className="text-zinc-400 text-[13px] uppercase">
            {postedAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
