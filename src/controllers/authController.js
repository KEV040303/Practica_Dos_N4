import jwt from "jsonwebtoken";
import User from "../models/user.js";

const secretKey = "your_secret_key";

const login = (req, res) => {
  const { username, password } = req.body;

  const user = User.findOne(username);

  if (user && user.password === password) {
    const token = jwt.sign({ username }, secretKey, { expiresIn: "5m" });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token inválido o ha expirado" });
    }
    next();
  });
};

const inicio = (req, res) => {
  res.json({ mensaje: "Bienvenido a la API" });
};

export { login, verifyToken, inicio };
