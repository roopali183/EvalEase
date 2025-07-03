import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import notificationRouter from "./routes/NotificationsRouter.js";
import studentRouter from "./routes/StudentRouter.js";
import collegeRouter from "./routes/CollegeRouter.js";
import evaluatorRouter from "./routes/EvaluatorRouter.js";
import universityRouter from "./routes/UniversityRouter.js";
import courseRouter from "./routes/CourseRouter.js";
import subjectRouter from "./routes/SubjectRouter.js";
import { fileURLToPath } from 'url';
import path from "path";
import fs from 'fs';
import multer from 'multer';
import answerSheetRouter from "./routes/AnswerSheetRouter.js";
import marksRouter from "./routes/MarksRouter.js";


dotenv.config();

const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin
    credentials: true, // Allow credentials (cookies)
    optionsSuccessStatus: 200 // For legacy browser support
};

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/notification", notificationRouter);
app.use("/student", studentRouter);
app.use("/college", collegeRouter);
app.use("/evaluator", evaluatorRouter);
app.use("/university", universityRouter);
app.use("/course", courseRouter);
app.use("/subject", subjectRouter);
app.use("/answerSheet", answerSheetRouter);
app.use("/mark", marksRouter);
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL; // Updated to match .env variable

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB Connected Successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on Port: ${PORT}`);
        });
    })
    .catch(error => console.log(error));

// Serve static files from the uploads directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDirectory = path.join(__dirname, 'uploads');

console.log(uploadDirectory);

// Ensure the uploads directory exists
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory); // Set destination to your uploadDirectory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Unique filename
    }
});

const upload = multer({ storage });

// Middleware to serve static files
app.use('/uploads', express.static(uploadDirectory, { encodeUrl: true }));