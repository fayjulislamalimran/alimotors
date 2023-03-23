import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About.js";
import Auto from "../Components/Auto/Auto.js";
import Blog from "../Components/Blog/Blog.js";
import Electric from "../Components/Electric/Electric.js";
import Error from "../Components/Error/Error.js";
import Home from "../Components/Home/Home.js";
import SignIn from "../Components/SignIn/SignIn.js";
import SignUp from "../Components/SignUp/SignUp.js";
import Main from "../Layout/Main.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/auto",
        element: <Auto></Auto>,
      },
      {
        path: "/electric",
        element: <Electric></Electric>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
