import React from "react";
import { Link, useLocation } from "react-router-dom";

const Main = () => {
  let location = useLocation();
  return (
    <>
      <div
        style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          backgroundImage: "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)",
          height: "100vh",
        }}
      >
        <div className=" pt-5  ">
          <div className="bg-gray-100 min-h-screen d-flex align-items-center justify-content-center ">
            <div className="bg-white p-4 rounded-lg shadow w-50 rounded-4">
              <h1 className="h1 mb-4">Welcome to EveryNote!</h1>
              <p className="text-muted mb-4 h6">
                Manage your tasks and stay organized anytime and anywhere on
                cloud
              </p>
              <button className="btn btn-primary ">
                <Link to="/home" className="btn btn-primary btn-block">
                  {" "}
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
