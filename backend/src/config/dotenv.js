// src/config/dotenv.js
import dotenv from "dotenv";
import path from "path";

// nếu muốn có .env ở project root (backend/.env)
const envPath = path.resolve(process.cwd(), ".env");

dotenv.config({ path: envPath });

// optional: log khi thiếu biến quan trọng (bỏ/comment khi deploy)
if (!process.env.DB_NAME || !process.env.DB_USER) {
  console.warn("Warning: Some DB environment variables are missing.");
}

export default process.env;
