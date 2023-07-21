import { useLocation, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaLink, FaFolderPlus } from "react-icons/fa";

const Buttons = ({ buttonActive }) => {
  const location = useLocation();

  const navigate = useNavigate();
  const handleLinkClick = (e) => {
    buttonActive(true);
    navigate("/link");
  };

  const handleHomeClick = (e) => {
    buttonActive(true);
    navigate("/");
  };
  const handleGroupClick = (e) => {
    buttonActive(true);
    navigate("/group");
  };
  return (
    <div className="buttons d-flex justify-content-center">
      <button
        className={`btn ${
          location.pathname.includes("link")
            ? null
            : location.pathname.includes("group")
            ? null
            : "active"
        }`}
        onClick={handleHomeClick}
      >
        <AiFillHome />
      </button>
      <button
        className={`btn ${
          location.pathname.includes("link") ? "active" : null
        }`}
        onClick={handleLinkClick}
      >
        <FaLink />
      </button>
      <button
        className={`btn ${
          location.pathname.includes("group") ? "active" : null
        }`}
        onClick={handleGroupClick}
      >
        <FaFolderPlus />
      </button>
    </div>
  );
};

export default Buttons;
