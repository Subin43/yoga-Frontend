import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Home/components/Navbar";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import About from "./pages/About";
import JobApply from "./pages/Career/components/JobApply";
import Login from "./pages/UI/Login";
import Register from "./pages/UI/Register";
import Demo from "./pages/Demo";
import Chatbot from "./pages/Home/components/Chatbot"; // Adjusted import
import Form from "./pages/Home/components/Form";

export default function App() {
  const route = createBrowserRouter([
    { path: "/login", element: <Login />, index: true },
    { path: "/register", element: <Register /> },

    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/career", element: <Career /> },
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
        { path: "job_apply", element: <JobApply /> },
        { path: "/demo", element: <Demo /> },
        {path:  "/form",element:<Form />},
        { path: "/chat", element: <Chatbot /> }, // Corrected path

      ],
    },
  ]);

  return <RouterProvider router={route}></RouterProvider>;
}
