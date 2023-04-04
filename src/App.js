// import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage';
import CreateBlog from './Pages/CreateBlog';
import Layout from './Layouts/Layout';
import axios from 'axios';

const urlEndPoint = "http://localhost:3001";



function App() {
  const [blogs, setBlogs] = useState([]);
  const [shouldRefresh ,setShouldRefresh] = useState(false);

  console.log(urlEndPoint);

  useEffect(() => {
    axios.get(`${urlEndPoint}/blogs/all`)
    .then(function (response) {
      console.log(response);
      setBlogs(response.data.blogs);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
  
    });
  },[shouldRefresh])
  
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <HomePage 
              blogs={blogs} 
              urlEndPoint={urlEndPoint} 
              setShouldRefresh={setShouldRefresh}
            />
  
          },
          { 
            path: "CreateBlog",
            element: <CreateBlog urlEndPoint={urlEndPoint} setShouldRefresh={setShouldRefresh}/>
          }
        ]   
  
      }
    ])
  
  
  return (

    // <div className="App">
   <div className="App-header"> 
    <RouterProvider router={router} />
  </div>
      
    );
  }


export default App;
