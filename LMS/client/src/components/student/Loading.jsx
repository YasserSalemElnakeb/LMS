// import React from 'react'

// const Loading = () => {
// return (
//     <div>
//         <h1>Loading</h1>
//     </div>
//     )
// }

// export default Loading
// داخل ملف Loading.jsx
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Loading = () => {
    const navigate = useNavigate();
    const { path } = useParams();

    useEffect(() => {
    const timeout = setTimeout(() => {
        navigate(`/${path}`);
    }, 2000); // مثلاً بعد ثانيتين

    return () => clearTimeout(timeout);
    }, [navigate, path]);

    return <div>Loading...</div>;
};

export default Loading;