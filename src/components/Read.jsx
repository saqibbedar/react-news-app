import { Link } from "react-router-dom";

const Read = ({ onClose, image, title, description, postedBy, postedAt, updatedAt }) => {
  return (
    <div onClick={onClose} className={`fixed top-0 left-0 h-[100dvh] w-full m-auto bg-black/30 backdrop-blur-[2px] grid place-items-center cursor-pointer`}>
      <div onClick={(e)=>e.stopPropagation()} className="bg-white w-[80%] h-[80%] shadow-lg cursor-auto px-10 overflow-y-auto">
        <div className="flex items-center border-b mt-8 pb-1">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <div className="flex gap-2 mt-2 text-[14px]">
          <p>
            Posted By{" "}
            <Link to={"/"} className="font-semibold">
              {postedBy}
            </Link>
          </p>
          |<p>{ postedAt }</p>
          {updatedAt && "|"}
          {updatedAt && <p>{postedAt}</p>}
        </div>
        <img src={image} className="w-full aspect-video h-[80%] object-cover object-center my-6" alt="" />
        <p className="mt-4 text-xl leading-9 mb-5">{description}</p>
      </div>
    </div>
  );
};

export default Read;
