import mongoose from "mongoose";
import Product from "../models/Product.js";
import products from "./data.js";

const seedProducts = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://chizobauchegbu10:pVcCWbuYeP5W70I4@chizoba-mart.kzmxph6.mongodb.net/?retryWrites=true&w=majority&appName=chizoba-mart"
    );

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
