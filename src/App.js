import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from './Router'
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {

  return (
      <>
          <Header/>
            <RouterProvider router={router} />
          <Footer/>
      </>
  );
}

export default App;
