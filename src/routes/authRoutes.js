import express from "express";
import { inicio, login, verifyToken } from "../controllers/authController.js";

const router = express.Router();

router.get("/", inicio);

router.post("/login", login);

router.get("/verify", verifyToken, (req, res) => {
  res.status(200).json({ message: "Token válido" });
});

export default router;
