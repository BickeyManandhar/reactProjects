import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./User/User.jsx";
import Github,{githubInfoLoader} from "./components/Gitgub/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home/> //this will be injected in outlet when clicked
//       },
//       {
//         path:"about",
//         element: <About/> //this will be injected in outlet when clicked
//       },
//       {
//         path:"contact",
//         element: <Contact/> //this will be injected in outlet when clicked
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
      loader={githubInfoLoader} //when using loader, this loads the api already when we just hover on the github in navigation bar. we use useLoaderData() hook in Github.jsx to get the loader data 
      path="github" 
      element={<Github />} 
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
