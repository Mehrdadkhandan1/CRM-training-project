import React from "react";
import ProductItem from "./ProductItem";
import FormInput from "./FormInput";

const Form = ({ form, setForm }) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(form.date)
  return (
    <div>
      <FormInput
        label={"name"}
        name={"name"}
        onChange={changeHandler}
        type={"text"}
        value={form.name}
      />
      <FormInput
        label={"last Name"}
        name={"lastName"}
        onChange={changeHandler}
        type={"text"}
        value={form.lastName}
      />
      <FormInput
        label={"email"}
        name={"email"}
        onChange={changeHandler}
        type={"email"}
        value={form.email}
      />
      <FormInput
        label={"phoneNumber"}
        name={"phoneNumber"}
        onChange={changeHandler}
        type={"text"}
        value={form.phoneNumber}
      />
      <FormInput
        label={"postalCode"}
        name={"postalCode"}
        onChange={changeHandler}
        type={"number"}
        value={form.postalCode}
      />

      <FormInput
        label={"address"}
        name={"address"}
        onChange={changeHandler}
        type={"text"}
        value={form.address}
      />
      <FormInput
        label={"date"}
        name={"date"}
        onChange={changeHandler}
        type={"date"}
        value={form.date}
      />

      <ProductItem form={form} setForm={setForm} />
    </div>
  );
};

export default Form;
