import { Schema, model, models } from "mongoose";

const CustomerSchema = new Schema({
  name: {
    type: String,
    minLength: 1,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 1,
    required: true,
  },
  email: {
    type: String,
    minLength: 1,
    required: true,
  },
  phoneNumber: {
    type: String,
    minLength: 11,
  },
  address: String,
  postalCode: Number,
  products: {
    type: Array,
    default: [],
  },
  date: Date,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Customer = models.Customer || model("Customer", CustomerSchema);
export default Customer;
