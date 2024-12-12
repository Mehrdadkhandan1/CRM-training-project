import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Card = ({ customer }) => {
  const router = useRouter();
  const deleteHandler = async () => {
    try {
      const res = await fetch(`/api/delete/${customer._id}`, { method: "DELETE" });
      console.log(res);
      router.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="card">
      <div className="card__details">
        {customer.name} {customer.lastName}
      </div>
      <div className="card__buttons">
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit-customer/${customer._id}`}>edit</Link>
        <Link href={`/customer/${customer._id}`}>details</Link>
      </div>
    </div>
  );
};

export default Card;
