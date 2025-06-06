import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Speakers from "./pages/Speakers.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import BecomeASponsor from "./pages/BecomeASponsor.jsx";
import Blog from "./pages/Blog.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "about-us",
        element: <About />,
      },
    ],
  },
  {
    path: "/speakers",
    element: <Speakers />,
  },
  {
    path: "/sponsors",
    element: <Sponsors />,
  },
  {
    path: "/become-a-sponsor",
    element: <BecomeASponsor />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
