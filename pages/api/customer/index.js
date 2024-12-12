import Customer from "../../../models/Customer";
import connectDb from "../../../Utils/db";

export default async function handler(req, res) {
  try {
    await connectDb();
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ status: "Failed", message: "Failed Connected Db" });
  }
  if (req.method === "POST") {
    const data = req.body
    const { name, lastName, email } =  req.body;
    if (!name || !lastName || !email) {
      return res
        .status(400)
        .json({ status: "Failed", message: "Data invalid" });
    }

    try {
      const customer = await Customer.create(data);
      res
        .status(201)
        .json({ status: "success", data: customer, message: "User created" });
    } catch (err) {
      console.log(err)
      res
        .status(500)
        .json({ status: "Failed", message: "Failed in create user " });
    }
  }
}
