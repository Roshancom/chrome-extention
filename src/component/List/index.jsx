import React from "react";
import { firestore } from "../../firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "@firebase/firestore";
import Accordian from "../Accordion";

const List = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [sellectedGroup, setSellectedGroup] = React.useState({
    name: "",
    isClicked: false,
  });
  const [activeIndex, setActiveIndex] = React.useState(null);
  const [deleteGroup, setDeleteGroup] = React.useState(false);
  const [deleteLink, setDeleteLink] = React.useState(false);

  const colRef = collection(firestore, "groups");

  React.useEffect(() => {
    getDocs(colRef).then((snapshort) => {
      const getGroups = snapshort.docs.map((doc) => doc.data());
      setData(getGroups);
      setLoading(false);
    });
  }, [deleteGroup, deleteLink]);

  const handleclick = (e, i) => {
    const value = e.target.innerText;
    const currentIndex = activeIndex === i ? null : i;

    setActiveIndex(currentIndex);
    setSellectedGroup((prev) => ({
      ...prev,
      name: value,
      isClicked: !prev.isClicked,
    }));
  };
  const handleTitleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleDeleteGroup = (e) => {
    const confirm = window.confirm("To delete group 'click ok'");
    if (confirm) {
      const delGroup = e.target.id;
      const delRef = doc(firestore, "groups", `${delGroup}`);
      deleteDoc(delRef).then(() => setDeleteGroup((prev) => !prev));
    }
  };

  const handleDeleteLink = (index) => {
    const group = data[activeIndex].group;
    const links = data[activeIndex].links;
    const confirm = window.confirm("To delete link 'click ok'");
    const updatelink = doc(firestore, "groups", `${group}`);
    links.splice(index, 1);

    if (confirm) {
      try {
        setDoc(updatelink, { ...data[activeIndex], links }).then(() =>
          setDeleteLink((prev) => !prev)
        );
      } catch (err) {
        alert(err.message);
      }
    }
  };
  return (
    <div className="list">
      <div className="links">
        <Accordian
          data={data}
          handleclick={handleclick}
          sellectedGroup={sellectedGroup}
          handleTitleClick={handleTitleClick}
          handleDeleteGroup={handleDeleteGroup}
          handleDeleteLink={handleDeleteLink}
          activeIndex={activeIndex}
        />
        {loading ? (
          <div
            className="loader-wrapper d-flex
        justify-content-center"
          >
            <span className="loader"></span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default List;
