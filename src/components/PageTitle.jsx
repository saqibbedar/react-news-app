import React, { useEffect } from 'react';

const PageTitle = ({ title }) => {

    useEffect(() => {
      const date = new Date();
      const options = { year: "numeric", month: "short", day: "numeric" };
      const formattedDate = date.toLocaleDateString(undefined, options);
      setCurrentDate(formattedDate);
    }, []);

    const [currentDate, setCurrentDate] = React.useState("");

  return (
    <>
      <div className='bg-zinc-300 w-fit px-2 text-xl font-semibold py-2'>Newspaper - {title} - {currentDate}</div>
    </>
  );
}

export default PageTitle
