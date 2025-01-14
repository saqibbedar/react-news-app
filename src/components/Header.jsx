import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    useEffect(() => {
        const date = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);
        setCurrentDate(formattedDate);
    }, []);

    const [currentDate, setCurrentDate] = React.useState('');

    return (
        <div className='grid place-items-center pb-2 mt-7'>
            <Link to={"/"} className='text-3xl font-bold'>The News Daily</Link>
            <p>E-Paper | { currentDate }</p>
        </div>
    )
}

export default Header
