import React from 'react';
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";


import Home from './pages/Home';
import './css/Globals.css'


function App() {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />
        }
      ]);
      


    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )

}

export default App