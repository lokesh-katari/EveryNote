import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";
import Login from "./Login";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)",
          height: "100vh",
        }}
      >
        {localStorage.getItem("auth-token") ? (
          <div>
            <div>
              <AddNote />
              <Notes />
            </div>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
};

export default Home;
