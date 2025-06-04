import React from "react";
import "../Home.css";
import { useNavigate, Link } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="content">
        <div className="home-title">
          <h1>Title</h1>
          <p className="desc">description</p>
        </div>
      </div>
    </div>
  );
};

// import React from "react";
// import "../Home.css";
// import { useNavigate, Link } from "react-router-dom";

// export const About = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div className="top-bar">
//         <h4>about</h4>
//         <button className="close" onClick={() => navigate("/")}>
//           [x]
//         </button>
//       </div>
//       <div className="content">
//         <div className="home-title">
//           <h1>Title</h1>
//           <p className="desc">description</p>
//         </div>
//       </div>
//     </div>
//   );
// };
