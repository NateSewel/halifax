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
import SingleBlog from "./pages/SingleBlog.jsx";
import blogs from "./data/blogs";
import RelatedPosts from "./components/RelatedPosts.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import TermsOfServicePage from "./pages/TermsOfServicePage.jsx";
// import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";

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
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "/blogs/:id",
    element: <SingleBlog blogs={blogs} />,
  },
  {
    path: "/blogs/related-blogs/:id",
    element: <RelatedPosts blogs={blogs} />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/terms-of-service",
    element: <TermsOfServicePage />,
    // children: [
    //   {
    //     path: "/privacy-policy",
    //     // element: <PrivacyPolicyPage />,
    //   },
    // ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
