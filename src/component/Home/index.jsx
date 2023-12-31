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
                {location.pathname.includes("link") ||
                location.pathname.includes("group") ? null : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 600 661"
                    fill="none"
                  >
                    <path
                      fill="#067cf2"
                      d="M223.407 602.557L270.407 360.827C272.86 348.215 280.222 337.093 290.873 329.907C301.525 322.721 314.594 320.06 327.207 322.507C339.819 324.96 350.94 332.322 358.124 342.974C365.309 353.626 367.968 366.695 365.517 379.307L318.517 621.047C316.066 633.661 308.705 644.784 298.053 651.971C287.401 659.157 274.331 661.818 261.717 659.367C249.105 656.912 237.984 649.548 230.799 638.894C223.615 628.241 220.956 615.171 223.407 602.557Z"
                    />
                    <path
                      fill="#067cf2"
                      d="M379.517 280.987L426.517 39.2572C427.724 33.0075 430.15 27.0568 433.658 21.7454C437.166 16.4341 441.686 11.8661 446.96 8.30262C452.234 4.73915 458.159 2.25008 464.396 0.977696C470.632 -0.294693 477.059 -0.325452 483.307 0.887178C495.919 3.34025 507.04 10.7023 514.224 21.354C521.409 32.0058 524.068 45.0749 521.617 57.6872L474.617 299.427C472.164 312.039 464.802 323.16 454.15 330.344C443.499 337.529 430.429 340.188 417.817 337.737C405.215 335.286 394.102 327.932 386.92 317.29C379.738 306.649 377.076 293.591 379.517 280.987Z"
                    />
                    <path
                      fill="#f2062a"
                      d="M0.887178 167.517C3.34025 154.905 10.7023 143.784 21.354 136.6C32.0058 129.416 45.0749 126.757 57.6872 129.207L299.427 176.207C312.035 178.66 323.152 186.02 330.336 196.667C337.52 207.314 340.182 220.378 337.737 232.987C335.288 245.592 327.935 256.708 317.294 263.894C306.653 271.079 293.594 273.746 280.987 271.307L39.2572 224.307C33.0075 223.101 27.0568 220.674 21.7454 217.166C16.4341 213.659 11.8661 209.138 8.30262 203.864C4.73915 198.59 2.25008 192.665 0.977696 186.429C-0.294693 180.192 -0.325452 173.766 0.887178 167.517Z"
                    />
                    <path
                      fill="#f42746"
                      d="M418.067 427.247C420.532 414.645 427.898 403.536 438.549 396.362C449.199 389.188 462.262 386.535 474.867 388.987L560.727 405.677C573.339 408.13 584.461 415.492 591.647 426.143C598.833 436.795 601.495 449.864 599.047 462.477C597.834 468.722 595.402 474.668 591.891 479.973C588.379 485.278 583.857 489.84 578.583 493.398C573.308 496.955 567.384 499.439 561.15 500.707C554.915 501.975 548.492 502.002 542.247 500.787L456.377 484.097C450.127 482.884 444.177 480.451 438.868 476.936C433.558 473.421 428.994 468.895 425.436 463.614C421.878 458.334 419.396 452.405 418.131 446.164C416.867 439.924 416.845 433.496 418.067 427.247Z"
                    />
                  </svg>
                )}
                <h1>
                  {location.pathname.includes("link")
                    ? "Add Link"
                    : location.pathname.includes("group")
                    ? "Group"
                    : "Hazedirect"}
                </h1>
              </div>
              {!buttonActive ? <List /> : null}

              <Routes>
                <Route path="/" element={<List />} />
                <Route path="/link" element={<AddList />} />
                <Route path="/group" element={<Group />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <Buttons buttonActive={setButtonActive} />
    </>
  );
};
export default Home;
