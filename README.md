# 🩺 HealthWise – Healthcare Appointment Booking Platform

**HealthWise** is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that allows patients to book appointments and administrators to manage those appointments via a secured dashboard. It includes email confirmations, admin authentication, and real-time notifications.

---

## 🔧 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios, React Router DOM, Context API
- **Backend**: Node.js, Express.js, JWT, Nodemailer, Mongoose
- **Database**: MongoDB (Cloud or Local)
- **Email Service**: Nodemailer (using Gmail SMTP or any custom SMTP provider)

---

## 📁 Folder Structure

HealthWise/ │ ├── client/                 # React frontend │   ├── public/ │   └── src/ │       ├── components/     # Navbar, LoginForm, AppointmentForm, etc. │       ├── pages/          # Home, Dashboard, Login, AdminLogin │       ├── context/        # AuthContext │       └── App.jsx │ ├── server/                 # Express backend │   ├── controllers/        # appointmentController.js, authController.js │   ├── models/             # Appointment.js, Admin.js │   ├── middleware/         # authMiddleware.js, errorHandler.js │   ├── routes/             # auth.js, appointments.js │   ├── utils/              # sendEmail.js │   └── server.js │ ├── .env                    # Environment variables ├── README.md └── package.json

---

## 🚀 Features

### ✅ Patient Side
- Appointment booking form
- Form validation
- Email confirmation sent to both user and admin
- Responsive UI

### ✅ Admin Panel
- Admin login with JWT protection
- View all appointments
- Delete appointments
- Real-time notification panel (new/deleted)
- Logout functionality

---

## 🔐 Authentication

- Uses **JWT** tokens to protect the `/dashboard` and other admin routes.
- Admin login is separate from user booking form.

---

## ✉️ Email Notification

- Email is sent to:
  - **Admin**: when a new appointment is made
  - **Patient**: confirming their appointment details
- Emails are handled via Nodemailer using Gmail SMTP.

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/healthwise.git
cd healthwise

2. Setup Backend

cd server
npm install

Create a .env file in the server folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password_or_app_pass

Start the server:

npm run dev

3. Setup Frontend

cd ../client
npm install
npm run dev


---

📎 API Endpoints

Method	Route	Description

POST	/api/appointments	Book appointment
GET	/api/appointments	Get all appointments (admin)
DELETE	/api/appointments/:id	Delete appointment (admin)
POST	/api/auth/login	Admin login



---

✅ To-Do (otional)

Pagination and search on dashboard

User authentication with appointment history

Integration with calendar APIs (Google Calendar, etc.)

Email template design



---

👨‍💻 Author

Olaniyi Hamidah Olaitan
📍 Ibadan, Nigeria
📧 hamidaholaniyi@gmail.com


---

📄 License

This project is licensed under the MIT License.

---

Let me know if you’d like a version of this `README.md` with GitHub Pages/Netlify deployment steps or a downloadable version.

