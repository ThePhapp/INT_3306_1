# Quick Start - Database Migration

## ⚠️ IMPORTANT: Setup Environment Variables First

Before running migrations, you MUST setup your `.env` file:

```bash
cd backend
copy .env.example .env
```

Then edit `.env` and add your MySQL password:
```env
DB_PASSWORD=your_mysql_password_here
```

**NEVER commit `.env` file to git!** It contains sensitive information.

---

## Bước 1: Cài đặt dependencies

```bash
cd backend
npm install
```

## Bước 2: Tạo database

```bash
# Mở MySQL Command Line hoặc MySQL Workbench
mysql -u root -p

# Trong MySQL, chạy:
CREATE DATABASE football_management;
exit;
```

## Bước 3: Cấu hình database

**Option 1: Sử dụng .env (Recommended - Secure)**

Password đã được lưu trong file `.env`:
```env
```

**Option 2: Cập nhật config.json (Not recommended for production)**

Hoặc cập nhật file `backend/config/config.json` với thông tin database:

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "football_management",
    ...
  }
}
```

⚠️ **Note:** Sequelize CLI hiện đang sử dụng `config.json`. Password sẽ được đọc từ `.env` khi chạy ứng dụng Node.js nhưng migrations cần password trong `config.json` hoặc sử dụng `config.cjs`.

## Bước 4: Chạy migrations

```bash
# Trong thư mục backend
npm run db:migrate
```

Nếu thành công, bạn sẽ thấy:

```
Sequelize CLI [Node: xx.xx.x, CLI: x.x.x, ORM: x.x.x]

Loaded configuration file "config/config.json".
Using environment "development".
== 20241107000001-create-person: migrating =======
== 20241107000001-create-person: migrated (0.123s)
== 20241107000002-create-fields: migrating =======
== 20241107000002-create-fields: migrated (0.089s)
...
```

## Bước 5: Kiểm tra

```bash
npm run db:migrate:status
```

Hoặc trong MySQL:

```sql
USE football_management;
SHOW TABLES;
```

Bạn sẽ thấy 13 bảng:
- person
- fields
- field_images
- field_schedules
- bookings
- payments
- reviews
- feedbacks
- replies
- revenue_daily
- revenue_weekly
- revenue_monthly
- SequelizeMeta (bảng hệ thống để track migrations)

## Commands hữu ích

```bash
# Kiểm tra trạng thái migrations
npm run db:migrate:status

# Rollback migration gần nhất
npm run db:migrate:undo

# Reset và chạy lại tất cả migrations
npm run db:migrate:reset
```

## Nếu gặp lỗi

### Lỗi: Cannot find module 'sequelize-cli'

```bash
npm install --save-dev sequelize-cli
```

### Lỗi: Cannot find module 'mysql2'

```bash
npm install mysql2
```

### Lỗi: Access denied for user 'root'@'localhost'

Kiểm tra lại username và password trong `config/config.json`

### Lỗi: Unknown database 'football_management'

Tạo database trước:

```sql
CREATE DATABASE football_management;
```

## Cấu trúc bảng đã tạo

1. **person** - Users (customers, managers, admin)
2. **fields** - Football fields
3. **field_images** - Field images
4. **field_schedules** - Available time slots
5. **bookings** - Booking records
6. **payments** - Payment transactions
7. **reviews** - Field reviews
8. **feedbacks** - Customer feedback
9. **replies** - Feedback replies
10. **revenue_daily** - Daily revenue
11. **revenue_weekly** - Weekly revenue
12. **revenue_monthly** - Monthly revenue

