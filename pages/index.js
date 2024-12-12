import React from "react";
import Customer from "../models/Customer";
import connectDb from "../Utils/db";
import Home from "../Components/Templates/Home";

const Index = ({ customers }) => {
  console.log(customers)
  return <Home customers={customers} />;
};
export default Index;

export async function getServerSideProps() {
  try {
    await connectDb();
    const customers = await Customer.find();
    console.log(customers);
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (e) {
    return { props: { notFound: true } };
  }
}
