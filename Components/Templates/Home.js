import React from "react";
import Card from "../Modules/Card";

const Home = ({ customers }) => {
  return (
    <div>
      {customers.map((customer) => {
        return <Card customer={customer} />;
      })}
    </div>
  );
};

export default Home;
