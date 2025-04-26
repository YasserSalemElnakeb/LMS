// import React from 'react'

// const CoursesList = () => {
// return (
//     <div>
//         <h1>Courses List Page</h1>
//     </div>
//     )
// }

// import { useParams } from 'react-router-dom';

// const CoursesList = () => {
//     const { input } = useParams();
  // Use `input` for filtering or searching
    // return <div>
    //   <h1>Course List
    //     </h1>
        /* {input && `for ${input}`} */
//         {input && <p>for {input}</p>}
//         </div>;
// };
// export default CoursesList
import { useParams } from 'react-router-dom';

const CoursesList = () => {
  const { input } = useParams();

  return (
    <div>
      <h1>yasser</h1>
      {input && <p>for {input}</p>}
    </div>
  );
};

export default CoursesList;