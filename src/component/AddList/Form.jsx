const inputs = [
  {
    label: "Title",
    type: "text",
    name: "title",
    placeholder: "Enter title",
    id: "title",
  },
  {
    label: "URl",
    type: "Url",
    name: "url",
    id: "url",
    placeholder: "https://example.com",
  },
];


const Form = ({
  handleSubmit,
  handleChange,
  groupSelect,
  input
}) => {
  return (
    <form onSubmit={handleSubmit}>
              <div className="wrapper">
                <div className="input-wrapper">
                  <label htmlFor="sellectedGroup">Group :</label>
                  <input
                    type="text"
                    id="sellectedGroup"
                    name="sellectedGroup"
                    value={groupSelect.groupName}
                    readOnly
                  />
                </div>
                {inputs.map((el, i) => (
                  <div className="input-wrapper" key={i}>
                    <label htmlFor={el.id}>{el.label} :</label>
                    <input
                      type={el.type}
                      name={el.name}
                      placeholder={el.placeholder}
                      id={el.id}
                      value={input[el.name]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}
              </div>
              <input className="btn btn-success" type="submit" value="Add" />
            </form>
  );
};

export default Form;
