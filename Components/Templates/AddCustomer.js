import { useRouter } from "next/router";
import React, { useState } from "react";
import Form from "../Modules/Form";

const AddCustomer = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    postalCode: "",
    date: "",
    products: [],
    address: "",
  });
  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      router.push("/"); // Redirect to customers page after successful save.
    } else {
      alert("Problems saving");
    }

    console.log(await res.json());
  };
  const cancelHandler = () => {};
  return (
    <div className="customer-page">
      <h4>Add new Customer</h4>
      {/* form  */}
      <Form form={form} setForm={setForm} />
      {/* btn handler */}
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          {" "}
          cancel{" "}
        </button>
        <button className="second" onClick={saveHandler}>
          {" "}
          save{" "}
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;
