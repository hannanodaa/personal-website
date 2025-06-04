// // import { Route, Routes } from "react-router-dom";
// // import "./App.css";
// // import { Home } from "./components/Home";
// // import { About, ArtPortfolio, Contact, FAQ, Links } from "./components/pages";

// // function App() {
// //   return (
// //     <div className="App">
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/portfolio" element={<ArtPortfolio />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/faq" element={<FAQ />} />
// //         <Route path="/links" element={<Links />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;

// import { Routes, Route, useLocation } from "react-router-dom";
// import Draggable from "react-draggable";
// import "./App.css";
// import { Home } from "./components/Home";
// import { About, ArtPortfolio, Contact, FAQ, Links } from "./components/pages";
// import { useRef } from "react";

// function App() {
//   const location = useLocation();
//   const nodeRef = useRef(null);

//   return (
//     <div className="App">
//       <Home />
//       {/* Render draggable popups for other routes */}
//       <Routes location={location}>
//         <Route
//           path="/about"
//           element={
//             <Draggable nodeRef={nodeRef}>
//               <div className="main popup" ref={nodeRef}>
//                 <About />
//               </div>
//             </Draggable>
//           }
//         />
//         <Route
//           path="/portfolio"
//           element={
//             <Draggable nodeRef={nodeRef}>
//               <div className="main popup" ref={nodeRef}>
//                 <ArtPortfolio />
//               </div>
//             </Draggable>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <Draggable nodeRef={nodeRef}>
//               <div className="main popup" ref={nodeRef}>
//                 <Contact />
//               </div>
//             </Draggable>
//           }
//         />
//         <Route
//           path="/faq"
//           element={
//             <Draggable nodeRef={nodeRef}>
//               <div className="main popup" ref={nodeRef}>
//                 <FAQ />
//               </div>
//             </Draggable>
//           }
//         />
//         <Route
//           path="/links"
//           element={
//             <Draggable nodeRef={nodeRef}>
//               <div className="main popup" ref={nodeRef}>
//                 <Links />
//               </div>
//             </Draggable>
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState, useRef } from "react";
import { Home } from "./components/Home";
import { About, ArtPortfolio, Contact, FAQ, Links } from "./components/pages";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";

export default function App() {
  const [openPopups, setOpenPopups] = useState([]);

  const POPUP_COMPONENTS = {
    about: About,
    portfolio: ArtPortfolio,
    contact: Contact,
    faq: FAQ,
    links: Links,
  };

  // Open popup handler
  const openPopup = (key) => {
    if (!openPopups.includes(key)) {
      setOpenPopups([...openPopups, key]);
    }
  };

  // Close popup handler
  const closePopup = (key) => {
    setOpenPopups(openPopups.filter((k) => k !== key));
  };

  return (
    <div className="App">
      <Home openPopup={openPopup} />

      {openPopups.map((key, index) => {
        const Component = POPUP_COMPONENTS[key];
        const nodeRef = React.createRef();

        // Calculate a staggered position for each popup
        const defaultPosition = {
          x: -100 + index * Math.floor(Math.random() * 150) - -300,
          y: -500 + index * Math.floor(Math.random() * 100) - -200,
        };

        return (
          <Draggable
            key={key}
            nodeRef={nodeRef}
            handle=".top-bar"
            defaultPosition={defaultPosition}
          >
            <div
              className="main popup"
              ref={nodeRef}
              style={{ position: "absolute", zIndex: 2 + index }}
            >
              <div className="top-bar">
                <h4>{key}</h4>
                <Link to="/" className="close" onClick={() => closePopup(key)}>
                  [x]
                </Link>
              </div>
              <Component />
            </div>
          </Draggable>
        );
      })}
    </div>
  );
}
