import express from "express";
import userClass from "../Controller/user.Controller.js";
import upload from "../Middleware/uploadFile.js";
import cors from "cors";
const router = express.Router();

router.get("/user", cors(), userClass.userApi);
router.post("/user", upload.single("file"), userClass.createUser);
router.post("/register", userClass.userRegister);

export default router;
