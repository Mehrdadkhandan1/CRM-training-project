import React, { useState } from "react";
import Form from "../Modules/Form";
import { useRouter } from "next/router";
import moment from "moment";

const EditPage = ({ data, id }) => {
    const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : ""; // Changed format to "YYYY-MM-DD"

  console.log(date)
  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    phoneNumber: data.phoneNumber || "",
    address: data.address || "",
    email: data.email || "",
    postalCode: data.postalCode || "",
    date: date,
    products: data.products || [],
  });
  const router = useRouter();
  const editHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
    });
    if (res.ok) {
      router.push("/");
    }
  };
  const cancelHandler = () => {
    router.push("/");
  };
  return (
    <div className="customer-page">
      <h3>Edit customer</h3>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button onClick={cancelHandler} className="first">
          cancel
        </button>
        <button onClick={editHandler} className="second">
          edit
        </button>
      </div>
    </div>
  );
};

export default EditPage;
