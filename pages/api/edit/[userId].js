import Customer from "../../../models/Customer";
import connectDb from "../../../Utils/db";

export default async function handler(req, res, next) {
  try {
    await connectDb();
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "An error Connect to db" });
  }
  if (req.method === "PATCH") {
    try {
      const { userId } = req.query;
      const data = JSON.parse(req.body);
      const customer = await Customer.findOneAndUpdate(
        { _id: userId },
        data.data
      );
      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      console.log(customer);
      customer.save();
      res.status(200).json({
        message: "Customer updated successfully",
        statusbar: "success",
      });
    } catch (e) {
      console.log(e.message);
      res
        .status(500)
        .json({ message: "An error occurred while updating customer" });
    }
  }
}
