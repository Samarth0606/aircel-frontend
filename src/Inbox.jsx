import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Mobile.css";
import { Card } from "./Card";

const Inbox = () => {
  const [activities, setActivities] = useState([]);
  //   const [activeTab, setActiveTab] = useState("inbox"); // Initial active tab

  const apiUrl = "https://cerulean-marlin-wig.cyclic.app/activities";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //   const handleTabClick = (tabName) => {
  //     setActiveTab(tabName);
  //   };
  let currentDate = null;

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="d-flex justify-content-around w-100">
            <div className="d-flex justify-content-between">
              <svg
                style={{ color: "green" }}
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="3rem"
                viewBox="0 0 26 26"
              >
                <g fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M13.5 26C20.404 26 26 20.404 26 13.5S20.404 1 13.5 1S1 6.596 1 13.5S6.596 26 13.5 26m0-2C19.299 24 24 19.299 24 13.5S19.299 3 13.5 3S3 7.701 3 13.5S7.701 24 13.5 24"
                    clipRule="evenodd"
                    opacity=".2"
                  ></path>
                  <path
                    d="m15.439 14.774l.582-.582a3 3 0 0 1 4.243 0l1.414 1.415a3 3 0 0 1 0 4.242l-2.806 2.806a1 1 0 0 1-1.064.227C11.318 20.404 6.874 15.93 4.5 9.57a1 1 0 0 1 .23-1.057l2.806-2.806a3 3 0 0 1 4.242 0l1.414 1.414a3 3 0 0 1 0 4.243l-.58.58a31.128 31.128 0 0 0 2.827 2.83"
                    opacity=".2"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="m15.874 12.546l-.91.911a31.647 31.647 0 0 1-3.535-3.537l.91-.91a2.5 2.5 0 0 0 0-3.535L10.925 4.06a2.5 2.5 0 0 0-3.536 0L4.583 6.866a.5.5 0 0 0-.114.529c2.324 6.226 6.661 10.593 13.018 13.02a.5.5 0 0 0 .531-.114l2.806-2.805a2.5 2.5 0 0 0 0-3.536l-1.414-1.414a2.5 2.5 0 0 0-3.536 0m4.243 2.121a1.5 1.5 0 0 1 0 2.122l-2.575 2.575c-5.821-2.306-9.811-6.32-12.023-12.02l2.577-2.576a1.5 1.5 0 0 1 2.122 0l1.414 1.414a1.5 1.5 0 0 1 0 2.121l-1.234 1.234a.5.5 0 0 0-.032.673a32.666 32.666 0 0 0 4.307 4.31a.5.5 0 0 0 .673-.031l1.235-1.236a1.5 1.5 0 0 1 2.122 0z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
              <h1 className="navbar-brand mt-1 mx-3 fs-3 black-color">
                Activity
              </h1>
            </div>
            <h4
              className={""}
              //   onClick={() => handleTabClick("inbox")}
            >
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? " navbar-text active" : ""
                }
                to={"/inbox"}
              >
                {" "}
                Inbox
              </NavLink>
            </h4>
            <div className="d-flex justify-content-between">
              <h4
                className={``}
                // onClick={() => handleTabClick("allCalls")}
              >
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "navbar-text active" : ""
                  }
                  to={"/"}
                >
                  {" "}
                  All Calls
                </NavLink>
              </h4>
              <svg
                className="navbar-brand mt-1 mx-5"
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2.1em"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 11V6"></path>
                  <circle cx="4.5" cy="4.5" r="1.5"></circle>
                  <path d="M9.5 3v3m0 3v2"></path>
                  <circle cx="9.5" cy="7.5" r="1.5"></circle>
                </g>
              </svg>
            </div>
          </div>
        </nav>
      </div>

      <div
        className="d-flex justify-content-start align-items-center border w-75 mx-auto bg-light mt-4 border-curve"
        style={{ height: "60px" }}
      >
        <svg
          className="ms-5"
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125"
          ></path>
        </svg>
        <NavLink className="black-color mx-3" to={`/archived`}>
          {" "}
          Archive all calls{" "}
        </NavLink>
      </div>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-75 mt-5">
          {activities.map((item, index) => {
            const itemDate = new Date(item.created_at).toLocaleDateString();

            return (
              <div key={index} className="date-line mb-5">
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Inbox;
