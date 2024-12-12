import React from "react";

const FormInput = ({ name, type, label, value, onChange }) => {
  return (
    <div className="form-input">
      <label htmlFor={name}> {label} </label>
      <input
        name={name}
        id={name}
        value={value}
        onChange={onChange} 
        type={type}
      />
    </div>
  );
};

export default FormInput;
