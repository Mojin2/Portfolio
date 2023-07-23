import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound";
import { useEffect, useState } from "react";

function Router() {
  const [iWidth, setiWidth] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newiWidth = window.innerWidth;
      setiWidth(newiWidth);
      console.log("updating widths");
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  console.log("give width : ", iWidth);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {iWidth > 500 || iWidth === 0 ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/who" element={<Home />} />
            <Route path="/vision" element={<Home />} />
            <Route path="/works" element={<Home />} />
            <Route path="/more" element={<Home />} />
            <Route path="/menu" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/who" element={<NotFound />} />
            <Route path="/vision" element={<NotFound />} />
            <Route path="/works" element={<NotFound />} />
            <Route path="/more" element={<NotFound />} />
            <Route path="/menu" element={<NotFound />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

// 1. createBrowswerRouter
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/vision",
//         element: <Vision />,
//       },
//       {
//         path: "/who",
//         element: <Who />,
//       },
//       {
//         path: "/works",
//         element: <Works />,
//       },
//       {
//         path: "/more",
//         element: <More />,
//       },
//     ],
//   },
// ]);

// 2. BrowserRouter
