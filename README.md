# 📝 EvalEase — Online Scanned Exam Paper Checking System

<div align="center">

![EvalEase Banner](https://img.shields.io/badge/EvalEase-Online%20Exam%20Evaluation-4A90E2?style=for-the-badge&logo=graduation-cap)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> **BCA Final Year Project** | Rani Channamma University, Belagavi  
> VSM's Bachelor of Computer Application College, Nipani | 2024–25

</div>

---

## 📖 About The Project

**EvalEase** is a web-based online scanned exam paper checking and evaluation system that revolutionizes the traditional, manual process of grading handwritten exam papers.

In today's digital era, manual grading of handwritten exam papers is time-consuming, error-prone, and lacks transparency. EvalEase provides a centralized digital platform that connects **students**, **colleges**, **universities**, and **evaluators** — automating the entire evaluation workflow from paper submission to final result with greater speed, accuracy, and consistency.

---

## 👩‍💻 Team

| Name | Roll No. | Role |
|------|----------|------|
| Roopali R. Mane | U15DB22S0127 | Developer |
| Komal B. Sapakale | U15DB22S0063 | Developer |
| Amruta S. Patil | U15DB22S0024 | Developer |

**Guide:** Prof. S. V. Chougale  
**Institution:** VSM's BCA College, Nipani — Rani Channamma University, Belagavi

---

## 🎯 Objectives

- 📄 **Digitize** the paper evaluation process to reduce reliance on physical documents
- 🏛️ **Centralize** interactions between students, colleges, universities, and evaluators
- ⚙️ **Automate** submission, approval, and evaluation workflows
- 🔍 **Improve transparency** and communication throughout the evaluation process
- 📊 **Provide real-time** tracking and reporting for better management and oversight

---

## ❌ Problems with Existing System

| Problem | Impact |
|---------|--------|
| Manual grading processes | Prone to errors and inefficiencies |
| Limited accessibility | Physical documents restrict remote reviewers |
| Long processing times | Delayed feedback and decisions |
| Lack of transparency | Evaluation criteria unclear to students |
| Physical documentation | Cumbersome storage and retrieval |
| High administrative burden | Increases overhead and operational costs |

---

## ✅ Advantages of EvalEase

| Feature | Description |
|---------|-------------|
| ⚡ **Efficiency** | Accelerates evaluation — significantly reduces time and resources |
| 🌐 **Accessibility** | Faculty and students can access papers remotely from anywhere |
| 🔎 **Transparency** | Clear grading standards and feedback improve trust |
| 🔒 **Security** | Secure storage and transfer of exam materials and records |
| 💰 **Cost Effective** | Reduces printing, storage, and manual handling expenses |
| 🎯 **Accuracy** | Minimizes human error for consistent, precise grading |

---

## 👥 Modules / End Users

```
┌─────────────────────────────────────────────────────────┐
│                      EvalEase System                    │
├──────────────┬───────────────┬────────────┬─────────────┤
│   Students   │   Colleges    │Universities│  Evaluators │
├──────────────┼───────────────┼────────────┼─────────────┤
│ • Register   │ • Approve     │ • Approve  │ • Register  │
│ • Submit     │   students    │  evaluators│ • Access    │
│   papers     │ • Upload      │ • Assign   │   papers    │
│ • Track      │   papers      │  subjects  │ • Evaluate  │
│   status     │ • Manage      │ • Oversee  │   online    │
│              │  submissions  │  process   │             │
└──────────────┴───────────────┴────────────┴─────────────┘
```

---

## 🛠️ Tech Stack — MERN

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React.js | Interactive UI, component-based design |
| **Backend** | Node.js + Express.js | REST API, server-side logic |
| **Database** | MongoDB | Flexible NoSQL data storage |
| **Language** | JavaScript | Full-stack unified language |
| **Version Control** | Git | Code management and collaboration |
| **IDE** | VS Code / WebStorm | Development environment |

---

## 💻 System Requirements

### Software
- Node.js v16+
- MongoDB v5+
- npm or yarn
- Git

### Hardware
- Processor: Intel Pentium 4 or higher
- RAM: 512 MB minimum (2 GB recommended)
- Storage: 20 GB free disk space
- Internet connection for cloud features

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/evalease.git
cd evalease
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4. Configure Environment Variables
```bash
# Create .env file in /backend
cp .env.example .env
```
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

### 5. Run the Application
```bash
# Start backend server (from /backend)
npm start

# Start frontend (from /frontend — new terminal)
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
evalease/
│
├── frontend/                  # React.js frontend
│   ├── public/
│   └── src/
│       ├── components/        # Reusable UI components
│       │   ├── Login/
│       │   ├── Dashboard/
│       │   ├── PaperSubmission/
│       │   └── EvaluationView/
│       ├── pages/             # Page-level components
│       ├── context/           # React context / state
│       └── App.js
│
├── backend/                   # Node.js + Express.js backend
│   ├── models/                # MongoDB schemas
│   │   ├── User.js
│   │   ├── Paper.js
│   │   ├── Evaluation.js
│   │   └── College.js
│   ├── routes/                # API routes
│   │   ├── auth.js
│   │   ├── students.js
│   │   ├── colleges.js
│   │   ├── universities.js
│   │   └── evaluators.js
│   ├── middleware/            # Auth & validation middleware
│   ├── controllers/           # Business logic
│   └── server.js
│
├── .env.example
├── .gitignore
└── README.md
```

---

## 🖥️ Key Screens

| Screen | Description |
|--------|-------------|
| 🔐 Login | Role-based login for all user types |
| 🏠 Home / Dashboard | User-specific dashboard with quick stats |
| 📤 Paper Submission | Students upload scanned answer sheets |
| ✅ Approval Panel | Colleges & universities manage approvals |
| 📝 Evaluation Interface | Evaluators review and grade papers online |
| 📊 Reports | Real-time evaluation status and analytics |
| 🔔 Alerts & Notifications | Status updates for all user roles |

---

## 🗄️ Database Design (MongoDB)

### Collections

```javascript
// Users Collection
{
  _id, name, email, password (hashed),
  role: ["student" | "college" | "university" | "evaluator"],
  status, createdAt
}

// Papers Collection
{
  _id, studentId, collegeId, subjectCode,
  scannedFileUrl, submissionDate,
  status: ["submitted" | "approved" | "assigned" | "evaluated"],
  evaluatorId, marks, feedback
}

// Evaluations Collection
{
  _id, paperId, evaluatorId,
  marks, comments, evaluatedAt, status
}

// Colleges Collection
{
  _id, collegeName, affiliationCode,
  universityId, contactEmail, approvedStudents[]
}
```

---

## 🔄 System Workflow (DFD Summary)

```
Student → Submits scanned paper
    ↓
College → Reviews & approves submission
    ↓
University → Assigns paper to evaluator
    ↓
Evaluator → Evaluates paper online
    ↓
Result → Published to student dashboard
```

---

## 🔮 Future Enhancements

- 🤖 **AI Integration** — Automated paper analysis and plagiarism detection
- 📱 **Mobile App** — Android & iOS applications for on-the-go access
- 📈 **Advanced Analytics** — Deeper insights into evaluation metrics and performance trends
- 🔗 **Third-party Integration** — Connect with institutional ERP/LMS systems
- 🌍 **Multilingual Support** — Accessibility for diverse linguistic backgrounds

---

## 🏁 Conclusion

EvalEase successfully addresses the major challenges of traditional paper evaluation by delivering a scalable, secure, and transparent digital platform. Built on the MERN stack, it automates the full workflow — from submission to final grading — reducing manual workload, minimizing errors, and accelerating academic decisions for all stakeholders.

---

## 📄 License

This project was developed as a **BCA Final Year Academic Project** at VSM's BCA College, Nipani under Rani Channamma University, Belagavi.

---

<div align="center">

Made with ❤️ by **Roopali R. Mane**, **Komal B. Sapakale** & **Amruta S. Patil**  
*Guided by Prof. S. V. Chougale*  
*VSM's BCA College, Nipani | 2024–25*

</div>
