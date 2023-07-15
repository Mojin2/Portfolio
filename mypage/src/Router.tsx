import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import App from "./App";
import Header from "./Components/Header";
import About from "./Routes/Vision";
import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound";
import Vision from "./Routes/Vision";
import Who from "./Routes/Who";
import Works from "./Routes/Works";
import More from "./Routes/More";
import Default from "./Routes/Default";
import { AnimatePresence } from "framer-motion";

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
function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who" element={<Home />} />
        <Route path="/vision" element={<Home />} />
        <Route path="/works" element={<Home />} />
        <Route path="/more" element={<Home />} />
        <Route path="/menu" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
