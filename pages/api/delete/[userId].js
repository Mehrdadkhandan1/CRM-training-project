import Customer from "../../../models/Customer";
import connectDb from "../../../Utils/db";

export default async function (req, res) {
    console.log(req)
  try {
    await connectDb();
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ status: "Failed", message: "Failed Connected Db" });
  }
  if (req.method === "DELETE") {
    try {
      const customerId = req.query.userId;
      const customer = await Customer.findByIdAndDelete(customerId);
      if (!customer) {
        return res
          .status(404)
          .json({ status: "Failed", message: "Customer not found" });
      }
      return res
        .status(200)
        .json({ status: "Success", message: "Customer deleted" });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ status: "Failed", message: "Failed deleting customer" });
    }
  }
}
