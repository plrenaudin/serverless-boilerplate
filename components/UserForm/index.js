import PropTypes from "prop-types";
import React from "react";
import useForm from "../hooks/useFormInputs";
import fetcher from "../../modules/fetcher";
import "./index.less";

const onSave = body => {
  console.log("init", body);
  fetcher("/api/users", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  }).then(() => {
    //Hack, should be handled by a global state management or something...
    window.location.reload();
  });
};

const UserForm = () => {
  const { inputs, handleInputChange, handleSubmit } = useForm({ _id: "", name: "", age: "" }, onSave);

  return (
    <form onSubmit={handleSubmit} className="userForm">
      <input type="hidden" name="id" value={inputs._id} />
      <input name="name" value={inputs.name} onChange={handleInputChange} placeholder="name" required />
      <input name="age" value={inputs.age} onChange={handleInputChange} placeholder="age" required />
      <button type="submit">Save</button>
    </form>
  );
};

UserForm.propTypes = {
  onSave: PropTypes.func
};

export default UserForm;
