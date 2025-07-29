🎓 UNI LOANLYTICS

UNI LOANLYTICS is a web application that helps students who are unaware of which colleges offer education loans through which banks. It enables them to search college-wise loan options, compare banks, and understand loan eligibility, tenure, collateral, and documents required.

🔍 Purpose
Students often don’t know:

Which bank offers loans for their college

Whether the loan is normal or scholarship-based

What documents are needed

Whether collateral is required

👉 UNI LOANLYTICS solves this with one search, showing all available options and letting them compare features in one place.

⚙️ Tech Stack
Layer	Technology
Frontend	React.js
Backend	Node.js, Express
Database	MongoDB
Uploads	Multer (file upload)
Config	dotenv

🧠 Features
College name search for loan-mapped banks

Show all bank details: tenure, loan type, max limit, EMI, documents, branch

Upload feature for student loan documents

Compare banks on key metrics

Nearest branch location integration

💻 How to Run Locally
1.⁠ ⁠Backend
cd backend npm install 
Create a .env file:
MONGO_URI=mongodb+srv://your_connection_string
PORT=5000
Then run:

npm start
2.⁠ ⁠Frontend

cd frontend
npm install
npm start

🧾 Example API Routes
Get all banks for a college:

GET /banks/:collegeName
Upload documents (backend route):

POST /upload

// multipart/form-data with document field
Compare banks:
POST /banks/compare

// Pass array of bank IDs to compare
