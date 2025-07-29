# 🎓 UNI LOANLYTICS — Student Education Loan Discovery Platform

**UNI LOANLYTICS** is a full-stack web application built to empower students and families in **discovering, comparing, and choosing education loan options** provided by various banks for specific colleges across India.

This platform bridges the knowledge gap between banks and students by displaying loan offerings in a simple, searchable interface — including information like loan types, tenures, documents required, whether collateral is needed, and nearest bank branches.

---

## 📌 Why This Project?

Many students — especially first-generation learners and those from rural or economically challenged backgrounds — are **unaware of the student loan facilities available** for their specific college. Banks often don’t advertise these education-specific loan schemes effectively.

**UNI LOANLYTICS** addresses this challenge by:

- Aggregating bank loan details college-wise.
- Displaying loan options in a user-friendly UI.
- Allowing students to compare loans.
- Highlighting nearest branches and documents required.
- Making loan discovery **transparent, fast, and student-first**.

---

## 🚀 Features

- 🔍 **Search by College Name** to fetch relevant bank loan data.
- 🏦 **View Loan Type, Max Amount, Tenure, and Collateral info**.
- 📄 **Document checklist** and **nearest branch location**.
- 📂 Upload section (future scope) for submitting documents digitally.
- 📱 Mobile-friendly and responsive React frontend.

---

## 🧩 Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | React, TailwindCSS |
| Backend     | Node.js, Express   |
| Database    | MongoDB (Cloud)    |
| HTTP Client | Axios              |
| Hosting     | GitHub (for demo)  |

---

## 🛠️ Project Structure

### ✅ Prerequisites

- Node.js installed
- MongoDB URI (e.g., MongoDB Atlas connection string)

---

### 🔧 Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
npm install

Install dependencies:

npm install
Create a .env file:

MONGO_URI=your_mongodb_connection_string
Start the server:

npm start
Server will run on: http://localhost:5000

💻 Frontend Setup
Navigate to frontend folder:

cd frontend
Install dependencies:

npm install
Start React app:

npm start
Frontend will run on: http://localhost:3000

📦 Sample MongoDB Schema

{
  "collegeName": "ABC College of Engineering",
  "name": "State Bank of India",
  "loanType": "Education Loan",
  "tenure": "7 years",
  "maxLoan": 750000,
  "collateralRequired": false,
  "documentsRequired": "10th, 12th, Aadhar, Admission Letter",
  "branch": "Anna Nagar, Chennai"
}
✨ Future Enhancements
🔐 Admin panel to manage bank listings.

📤 File upload (for KYC/document submission).

📊 EMI calculator.

🧠 AI Chatbot to guide students.

🌍 Multilingual interface (regional support).

🤝 Contributions
This was developed as part of a Hackathon project submission to help empower student financial decisions.
