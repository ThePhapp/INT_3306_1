import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost", // Máy chủ MySQL (nếu bạn chạy local)
  user: "root", // Tài khoản MySQL
  password: "123456789", // Mật khẩu MySQL (thường để trống nếu dùng XAMPP)
  database: "quanlysanbong", // Tên database bạn đã tạo
  port: 3306, // Cổng mặc định MySQL
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;
