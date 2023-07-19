import React from "react";
import { firestore } from "../../firebase";
import { collection, getDoc, getDocs, doc, setDoc } from "@firebase/firestore";
import Form from "./Form";


const AddList = () => {
  const [data, setData] = React.useState();
  const [input, SetInput] = React.useState({});
  const [groups, setGroups] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState({ filter: "" });
  const [groupSelect, setGroupSelect] = React.useState({ clickStatus: false });

  const colRef = collection(firestore, "groups");

  React.useEffect(() => {
    setTimeout(() => {
      getDocs(colRef).then((snapshort) => {
        const group = snapshort.docs.map((doc) => doc.data().group);
        setGroups(group);
        setLoading(false);
      });
    }, 300);
  }, []);

  React.useEffect(() => {
    if (groupSelect.clickStatus) {
      const groupLinks = doc(firestore, "groups", `${groupSelect.groupName}`);
      getDoc(groupLinks).then((snapshort) => {
        const data = snapshort.data();
        setData(data);
      });
    }
  }, [groupSelect]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const linkRef = doc(firestore, "groups", `${groupSelect.groupName}`);

    const links = [...data.links, input];

    try {
      setDoc(linkRef, { ...data, links });
    } catch (err) {
      alert(err.message);
    }
    setGroupSelect((prev) => ({ ...prev, clickStatus: false }));
    SetInput({});
  };

  const handleGroupClick = (e) => {
    setGroupSelect((prev) => ({
      ...prev,
      groupName: e.target.innerText,
      clickStatus: true,
    }));
  };

  return (
    <div className="addList">
      <div className="group-wrapper">
        <div className="group-body">
          {!loading && !groupSelect.clickStatus ? (
            <div className="filter">
              <input
                type="search"
                name="filter"
                placeholder="filter..."
                value={filter.filter}
                onChange={handleFilterChange}
                autoComplete="off"
              />
            </div>
          ) : null}
          {!groupSelect.clickStatus ? (
            <div className="group-list">
              {groups
                .filter((item) =>
                  filter.filter.trim() === ""
                    ? item
                    : item.toLowerCase().includes(`${filter.filter}`)
                )
                .map((group, i) => (
                  <div className="group" key={i} onClick={handleGroupClick}>
                    {group}
                  </div>
                ))}
            </div>
          ) : null}
          {loading ? (
            <div
              className="loader-wrapper d-flex
        justify-content-center"
            >
              <span className="loader"></span>
            </div>
          ) : null}

          {groupSelect.clickStatus ? (
            <Form 
            handleSubmit = {handleSubmit}
            handleChange = {handleChange}
            groupSelect = {groupSelect}
            input = {input}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AddList;
