import React from "react";
import { firestore } from "../../firebase";
import { getDocs, setDoc, doc, collection } from "@firebase/firestore";
import Notification from "../Notification";

const Group = () => {
  const [groupName, setGroupName] = React.useState({
    group: "",
    url: "",
    reactIcon: "",
  });
  const [notify, setNotify] = React.useState(false);
  const [existGroup, setExistGroup] = React.useState();
  const colRef = collection(firestore, "groups");

  React.useEffect(() => {
    setTimeout(() => {
      setNotify(false);
    }, 1000);
  }, [notify]);

  React.useEffect(() => {
    getDocs(colRef).then((snapshort) => {
      const group = snapshort.docs.map((doc) => doc.data().group);
      setExistGroup(group);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      alert(`${groupName.group} group had been already exist`);
      setGroupName({ group: "" });
    } else {
      const data = doc(firestore, "groups", `${groupName.group}`);
      console.log(groupName);
      try {
        setDoc(data, {
          group: `${groupName.group}`,
          links: [],
          url: `${groupName.url}`,
          reactIcons: `${groupName.reactIcon}`,
        });
      } catch (err) {
        console.log(err.message);
      }
      setGroupName({ group: "", url: "", reactIcon: "" });
    }

    setNotify(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupName((prev) => ({ ...prev, [name]: value }));
  };

  const handleReactIconClick = () => {
    window.open(
      "https://react-icons.github.io/react-icons/icons?name=di",
      "_blank"
    );
  };

  const validation = () => {
    const groups = existGroup.map((el) => el.toUpperCase());

    const isDublicate = groups.find(
      (el) => el === groupName.group.toUpperCase()
    );
    return isDublicate;
  };
  return (
    <>
      <div className="groups">
        <span className="notify">{notify ? <Notification /> : null}</span>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="group">Group :</label>
            <input
              type="text"
              name="group"
              id="group"
              placeholder="Enter Group"
              value={groupName.group}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="url">URL :</label>
            <input
              type="url"
              id="url"
              name="url"
              placeholder="Enter picture url"
              value={groupName.url}
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label
              title="Click to get ReactIcons"
              onClick={handleReactIconClick}
              htmlFor="reactIcon"
            >
              ReactIcon :
            </label>
            <input
              type="reactIcon"
              id="reactIcon"
              name="reactIcon"
              placeholder="Enter reactIcon"
              value={groupName.reactIcon}
              onChange={handleChange}
            />
          </div>

          <input className="btn btn-success" type="submit" value="Save" />
        </form>
      </div>
    </>
  );
};

export default Group;
