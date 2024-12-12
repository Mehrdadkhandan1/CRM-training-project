import Customer from "../../../models/Customer";
import connectDb from "../../../Utils/db";

export default async function handler(req, res) {
  try {
    connectDb();
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ status: "Failed", message: "Failed to connect to the database" });
  }
  if (req.method === "GET") {
    try {
      const { userId } = req.query;
      const customers = await Customer.findOne({ _id: userId });
      return res.status(200).json({ status: "Success", data: customers });
    } catch (e) {
      return res
        .status(500)
        .json({ status: "Failed", message: "Failed to fetch customers" });
    }
  }
}
