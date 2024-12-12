import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CustomerPage = ({ data, id }) => {
  const router = useRouter();
  const deleteHandler = async () => {
    try {
      const res = await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });
      console.log(res);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="customer-detail">
      <h4>Customer detail</h4>
      <div className="customer-detail__main">
        <div className="customer-detail__item">
          <span>name :</span>
          <p>{data.name}</p>
        </div>
        <div className="customer-detail__item">
          <span>last Name :</span>
          <p>{data.lastName}</p>
        </div>
        {data.postalCode && (
          <div className="customer-detail__item">
            <span>postal Code : </span>
            <p>{data.postalCode}</p>
          </div>
        )}
        {data.phoneNumber && (
          <div className="customer-detail__item">
            <span>phone Number : </span>
            <p>{data.phoneNumber}</p>
          </div>
        )}
        {data.address && (
          <div className="customer-detail__item">
            <span>address : </span>
            <p>{data.address}</p>
          </div>
        )}
        {data.date && (
          <div className="customer-detail__item">
            <span>date : </span>
            <p>{moment(data.date).utc().format("YYYY-MM-DD")}</p>
          </div>
        )}
        {data.email && (
          <div className="customer-detail__item">
            <span>email : </span>
            <p>{data.email}</p>
          </div>
        )}
      </div>
      <div className="customer-detail__products">
        <p>name</p>
        <p>price</p>
        <p>qty</p>
        {data.products?.map((product, index) => {
          return (
            <React.Fragment key={index}>
              <p>{product?.name}</p>
              <p>{product?.price}</p>
              <p>{product?.qty}</p>
            </React.Fragment>
          );
        })}
      </div>
      <div className="customer-detail__buttons">
        <p>edit or Delete ?</p>
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${id}`}>edit</Link>
      </div>
    </div>
  );
};

export default CustomerPage;
