// import React, { useState } from "react";
// import "./Home.css";
// import { Link } from "react-router-dom";

// export const Home = () => {
//   const [hoveredIcon, setHoveredIcon] = useState(false);

//   const iconImgData = [
//     { icon: "fa-child", label: "About", path: "/about" },
//     { icon: "fa-paperclip", label: "Links", path: "/links" },
//     { icon: "fa-question-circle", label: "Portfolio", path: "/portfolio" },
//     { icon: "fa-paint-brush", label: "FAQ", path: "/faq" },
//     { icon: "fa-envelope-o", label: "Contact", path: "/contact" },
//   ];

//   return (
//     <div className="main">
//       <div className="top-bar">
//         <h4>home</h4>
//         {/* <h4 className="close">[x]</h4> */}
//       </div>

//       {/*
//       ---- CONTENT ----
//       */}
//       <div className="content">
//         <div className="home-title">
//           <h1>Title</h1>
//           <p className="desc">description</p>
//         </div>
//         <div className="home icon-links">
//           {iconImgData.map((item, index) => (
//             <span
//               key={index}
//               onMouseOver={() => setHoveredIcon(index)}
//               onMouseOut={() => setHoveredIcon(null)}
//               className={`link-nav ${hoveredIcon === index ? "enlarged" : ""}`}
//             >
//               <Link to={item.path} className={`fa ${item.icon}`}></Link>
//               <Link className="home-links" to={item.path}>
//                 {item.label}
//               </Link>
//             </span>
//           ))}
//         </div>
//         <div className="icon-names"></div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";

export const Home = ({ openPopup }) => {
  const iconImgData = [
    { icon: "fa-child", label: "about", key: "about" },
    { icon: "fa-paperclip", label: "links", key: "links" },
    { icon: "fa-question-circle", label: "portfolio", key: "portfolio" },
    { icon: "fa-paint-brush", label: "faq", key: "faq" },
    { icon: "fa-envelope-o", label: "contact", key: "contact" },
  ];

  return (
    <div className="main">
      <div className="top-bar">
        <h4>home</h4>
        {/* <h4 className="close">[x]</h4> */}{" "}
      </div>
      <div className="content">
        <div className="home-title">
          <h1>Title</h1>
          <p className="desc">description</p>
        </div>
        <div className="home icon-links">
          {iconImgData.map(({ icon, label, key }) => (
            <span
              key={key}
              className="link-nav"
              onClick={() => openPopup(key)}
              style={{ cursor: "pointer" }}
            >
              <i className={`fa ${icon}`}></i> {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
