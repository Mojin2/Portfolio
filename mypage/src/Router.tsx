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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who" element={<Who />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/works" element={<Works />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
