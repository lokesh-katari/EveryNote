import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";
import Login from "./Login";

const Home = () => {
    

   

  return (
    <>
       {
        localStorage.getItem("auth-token")?<div >
          <AddNote/>
        <Notes/>
        </div>:<Login/>
     
       }
    </>
  );
};

export default Home;
