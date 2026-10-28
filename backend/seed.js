
import mongoose from "mongoose";
import dotenv from "dotenv";
import Student from "./models/student.js";
import Faculty from "./models/faculty.js";

dotenv.config();

const students = [
  {
    name: "Juan Dela Cruz",
    studentNumber: "2026-0001",
    course: "BSIT",
  },
  {
    name: "Maria Santos",
    studentNumber: "2026-0002",
    course: "BSCS",
  },
  {
    name: "Pedro Reyes",
    studentNumber: "2026-0003",
    course: "BSIT",
  },
  {
    name: "Ana Garcia",
    studentNumber: "2026-0004",
    course: "BSIS",
  },
  {
    name: "Jose Ramos",
    studentNumber: "2026-0005",
    course: "BSIT",
  },
];

const faculties = [
  {
    name: "Prof. Antonio Cruz",
    empNumber: "EMP001",
    department: "Information Technology",
  },
  {
    name: "Prof. Elena Santos",
    empNumber: "EMP002",
    department: "Computer Science",
  },
  {
    name: "Prof. Roberto Reyes",
    empNumber: "EMP003",
    department: "Information Systems",
  },
  {
    name: "Prof. Maria Garcia",
    empNumber: "EMP004",
    department: "Information Technology",
  },
  {
    name: "Prof. Daniel Ramos",
    empNumber: "EMP005",
    department: "Computer Science",
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected!");

    await Student.deleteMany({});
    await Faculty.deleteMany({});

    await Student.insertMany(students);
    await Faculty.insertMany(faculties);

    console.log("5 students inserted successfully!");
    console.log("5 faculty records inserted successfully!");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
