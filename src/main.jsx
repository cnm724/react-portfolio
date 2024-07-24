import ReactDOM from "react-dom/client";
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"

import App from "./App";
import "./index.css";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/ProjectPage";
import Resume from "./components/pages/Resume";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ]

  }
])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
