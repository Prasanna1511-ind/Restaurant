# 🍽️ Spice Garden Restaurant Website

A responsive restaurant website developed using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.

The website allows customers to explore restaurant information, view food menus, and book restaurant tables online. The table booking system stores customer information in a MySQL database through a Node.js and Express.js backend.

---

## 📌 Project Overview

**Spice Garden Restaurant** is a restaurant website designed to provide customers with an easy and interactive online experience.

Customers can explore the restaurant, view food menus, check the gallery, and reserve restaurant tables through an online booking form.

The table booking feature includes three different service categories:

- Premium Class
- Gold Class
- Silver Class

When a customer selects a table and submits the booking form, the details are sent to the Express.js backend and stored in the MySQL database.

---

## ✨ Features

### Frontend Features
- Responsive restaurant homepage
- Restaurant introduction
- Food menu section
- Restaurant image gallery
- About section
- Contact section
- Interactive table booking page
- Premium, Gold, and Silver table categories
- Customer booking popup form

### Backend Features
- Node.js server
- Express.js REST API
- MySQL database connectivity
- Customer booking data insertion
- Required field validation
- Duplicate booking check for the same table, date, and time
- Booking ID generation

### Database Features
- Restaurant table management
- Customer booking information
- Booking date and time storage
- Booking status management

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Website styling |
| JavaScript | Frontend interactivity |
| Node.js | Backend runtime environment |
| Express.js | Backend server and API |
| MySQL | Database management |
| MySQL2 | Node.js and MySQL connection |
| CORS | Frontend-backend communication |
| VS Code | Development environment |
| MySQL Workbench | Database management |

---

## 📂 Project Folder Structure

```text
Resturant/
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── routes/
│   │   └── bookingRoutes.js
│   │
│   ├── node_modules/
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── index.html
├── tableBook.html
├── order.html
│
├── rest1.css
├── Style.css
│
├── home.jpeg
├── home1.jpeg
└── home2.jpeg
```

**Folder Description:**

- `backend/` – Contains backend application files.
- `config/db.js` – MySQL database connection.
- `routes/bookingRoutes.js` – Handles customer table booking requests.
- `server.js` – Starts the Express.js server.
- `package.json` – Contains project dependencies.
- `index.html` – Main restaurant website.
- `tableBook.html` – Restaurant table booking page.
- `order.html` – Food ordering page.
- `rest1.css` – Main website styling.
- `Style.css` – Order page styling.
- `home.jpeg`, `home1.jpeg`, `home2.jpeg` – Restaurant images.

---

# 🚀 Installation and Setup

Follow these steps to run the project on your local computer.

## 1. Install Required Software

Install the following software:

1. **Node.js** – JavaScript runtime environment.
2. **MySQL Server** – Database management system.
3. **MySQL Workbench** – Database interface.
4. **Visual Studio Code** – Code editor.
5. **Google Chrome** – Website testing.

Verify Node.js installation:

```bash
node -v
```

Verify npm installation:

```bash
npm -v
```

If both commands display version numbers, Node.js and npm are installed successfully.

---

## 2. Clone the Repository

Open your terminal and execute:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project folder:

```bash
cd Resturant
```

---

## 3. Create Node.js Backend

Navigate to the backend folder:

```bash
cd backend
```

Initialize the Node.js project:

```bash
npm init -y
```

This command creates the `package.json` file.

---

## 4. Install Required Dependencies

Install Express.js:

```bash
npm install express
```

Install MySQL2:

```bash
npm install mysql2
```

Install CORS:

```bash
npm install cors
```

Alternatively, install all dependencies together:

```bash
npm install express mysql2 cors
```

These packages are required for backend development and database connectivity.

---

## 5. Create MySQL Database

Open MySQL Workbench.

Execute the following SQL commands:

```sql
CREATE DATABASE restaurant_booking;

USE restaurant_booking;
```

### Create Dining Tables

```sql
CREATE TABLE dining_tables (
    table_id INT AUTO_INCREMENT PRIMARY KEY,
    table_number VARCHAR(10) UNIQUE NOT NULL,
    table_class ENUM('PREMIUM','GOLD','SILVER') NOT NULL,
    capacity INT DEFAULT 4
);
```

### Insert Restaurant Tables

```sql
INSERT INTO dining_tables
(table_number, table_class)
VALUES
('P1','PREMIUM'),
('P2','PREMIUM'),
('P3','PREMIUM'),
('P4','PREMIUM'),
('P5','PREMIUM'),
('P6','PREMIUM'),

('G1','GOLD'),
('G2','GOLD'),
('G3','GOLD'),
('G4','GOLD'),
('G5','GOLD'),
('G6','GOLD'),

('S1','SILVER'),
('S2','SILVER'),
('S3','SILVER'),
('S4','SILVER'),
('S5','SILVER'),
('S6','SILVER');
```

### Create Table Bookings

```sql
CREATE TABLE table_bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    table_id INT NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    purpose VARCHAR(255),
    phone VARCHAR(15) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,

    booking_status ENUM(
        'PENDING',
        'CONFIRMED',
        'CANCELLED'
    ) DEFAULT 'PENDING',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (table_id)
    REFERENCES dining_tables(table_id)
);
```

---

## 6. Configure Database Connection

Open:

```text
backend/config/db.js
```

Configure your MySQL credentials:

```javascript
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_MYSQL_PASSWORD",
    database: "restaurant_booking",
    port: 3306
});

db.connect((err) => {

    if (err) {
        console.log("Database Connection Failed:", err);
        return;
    }

    console.log("MySQL Connected Successfully!");

});

module.exports = db;
```

Replace `YOUR_MYSQL_PASSWORD` with your own MySQL password.

**Security Note:** Never upload your actual database password to GitHub. Use environment variables or a `.env` file and add `.env` to `.gitignore`.

---

## 7. Start the Node.js Backend Server

Open the terminal inside the backend folder.

Execute:

```bash
node server.js
```

If everything is configured correctly, the output will be:

```text
MySQL Connected Successfully!
Server running at http://localhost:5000
```

Your backend server is now running.

---

## 8. Run the Frontend Website

Open the project folder in Visual Studio Code.

1. Open `index.html`.
2. Right-click the HTML file.
3. Select **Open with Live Server**.

To test table booking:

1. Open `tableBook.html` using Live Server.
2. Select a restaurant table.
3. Enter customer details.
4. Select booking date and time.
5. Click the **Book Now** button.

The frontend sends the booking information to the Express.js backend.

The backend inserts the booking information into the MySQL database.

---

## 🌐 Localhost and API Information

### Backend Server

```text
http://localhost:5000
```

### Backend API

```text
POST http://localhost:5000/api/bookings/book
```

### API Method

```text
POST
```

### Request Content Type

```text
application/json
```

### Sample JSON Request

```json
{
    "table_id": 1,
    "customer_name": "Robin",
    "purpose": "Birthday Celebration",
    "phone": "9876543210",
    "booking_date": "2026-11-10",
    "booking_time": "19:00"
}
```

### Successful Response

```json
{
    "message": "Table booked successfully!",
    "booking_id": 1
}
```

---

## 🧪 Verify Database Records

Open MySQL Workbench and execute:

```sql
USE restaurant_booking;

SELECT * FROM dining_tables;

SELECT * FROM table_bookings;
```

The customer booking details should appear in the `table_bookings` table.

---

## ▶️ Commands Summary

| Command | Purpose |
|---|---|
| `node -v` | Check Node.js version |
| `npm -v` | Check npm version |
| `npm init -y` | Initialize Node.js project |
| `npm install express` | Install Express.js |
| `npm install mysql2` | Install MySQL2 |
| `npm install cors` | Install CORS |
| `npm install` | Install project dependencies |
| `node server.js` | Start backend server |

---

## 🔄 Application Workflow

```text
       CUSTOMER
           |
           v
    Restaurant Website
           |
           v
      tableBook.html
           |
           v
     Select Restaurant
          Table
           |
           v
      Booking Form
           |
           v
     JavaScript Fetch
           |
           v
    Express.js REST API
           |
           v
      Node.js Server
           |
           v
      MySQL Database
           |
           v
    Save Booking Details
           |
           v
   Booking Confirmation
```

---

## 📌 Future Enhancements

- Admin dashboard
- View all customer bookings
- Confirm and cancel bookings
- Display table availability
- Search customer bookings
- Filter bookings by date
- Customer booking history
- Online food ordering integration

---

## 👨‍💻 Author

**Developed as a Restaurant Website Project**

Technologies: HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.

---

## 📄 License

This project is developed for educational and learning purposes.
```

## Important: Before uploading to GitHub

I noticed two things in your ZIP folder.

**1. Remove `node_modules` from GitHub**

You don't need to upload 1,000+ dependency files.

Create a file named `.gitignore` inside your project:

```text
node_modules/
.env
```

GitHub will then ignore these folders/files.

**2. Protect your MySQL password**

Your uploaded `db.js` currently contains a database password. Change it before making the repository public. If that password is used by your actual MySQL account, rotate it as well.

### GitHub upload commands

```bash
git init
git add .
git commit -m "Initial restaurant website project"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

**One final step:** Save the README content in a file named exactly `README.md` in the main `Resturant` folder, not inside `backend`.

GitHub will automatically display it on your repository homepage. 🚀
