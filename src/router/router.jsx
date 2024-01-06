import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Video from "../pages/Video";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/video/:id",
        element: <Video />,
      },
    ],
  },
]);
