import mongoose from "mongoose";

async function connectDB(data) {
  const details = {
    name: "E_Commerce",
  };
  let URL = `${data}/${details.name}`;
  try {
    await mongoose.connect(URL);
    console.log("Database Connected Successfully.");
  } catch (error) {
    console.log("system error is ", error);
  }
}

export default connectDB;
