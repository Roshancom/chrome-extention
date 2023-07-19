import React from "react";
import { MdDelete } from "react-icons/md";
import ResolveIcon from "../ResolveIcon";

const Accordian = ({
  data,
  handleTitleClick,
  handleclick,
  handleDeleteGroup,
  handleDeleteLink,
  activeIndex,
}) => {
  return (
    <div className="accordian-wrapper">
      {data.map((el, i) => (
        <div key={i}>
          <div
            className="accordion"
            onClick={(e) => {
              handleclick(e, i);
            }}
          >
            {el.reactIcons ? (
              <ResolveIcon icon={el.reactIcons} />
            ) : el.url ? (
              <img src={el.url} height="20" width="20" />
            ) : (
              <span></span>
            )}
            <div className="item">{el.group}</div>
            <button id={el.group} onClick={handleDeleteGroup}>
              <MdDelete style={{pointerEvents: "none"}} />
            </button>
          </div>
          {activeIndex === i ? (
            <ul>
              {el.links.map((link, index) => (
                <li key={link.title}>
                  <span
                    onClick={() => {
                      handleTitleClick(link.url);
                    }}
                  >
                    {link.title}
                  </span>
                  <button
                    className="delete-link"
                    id={index}
                    onClick={() => {
                      handleDeleteLink(index);
                    }}
                  >
                    <MdDelete style={{ pointerEvents: "none" }} />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
};
export default Accordian;
