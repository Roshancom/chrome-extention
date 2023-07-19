import React from "react";
import List from "../List";
import { Route, Routes, useLocation } from "react-router-dom";
import AddList from "../AddList";
import Group from "../Group";
import Buttons from "../Buttons";

const Home = () => {

  const [buttonActive, setButtonActive] = React.useState(false);

  const location = useLocation();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="home">
              <div className="title">
                <h1>
                  {location.pathname.includes("link")
                    ? "Add Link"
                    : location.pathname.includes("group")
                    ? "Group"
                    : "Hazedirect"}
                </h1>
              </div>
              {!buttonActive ? <List /> : null }
              
              <Routes>
                <Route path="/" element={<List />} />
                <Route path="/link" element={<AddList />} />
                <Route path="/group" element={<Group />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <Buttons buttonActive={setButtonActive}/>
    </>
  );
};
export default Home;
