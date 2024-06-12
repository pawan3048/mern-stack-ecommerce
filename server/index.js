import express from "express";
import dotenv from "dotenv";
import router from "./Router/user.Router.js";
import connectDB from "./Database/database.js";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./uploads"));
app.use("/", router);

const PORT = process.env.PORT;
const DbURL = process.env.DATABASE_URL;
connectDB(DbURL);

app.listen(PORT, () => {
  console.log(`Server started on PORT => http://localhost:${PORT}`);
});
