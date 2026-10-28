import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import Student from "./models/student.js";
import Faculty from "./models/faculty.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected!"))
  .catch((error) => console.error("MongoDB error:", error));

// Get all students
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


 // Add a new student
app.post("/api/students", async (req, res) => {
  try {
    const { name, studentNumber, course } = req.body;

    if (
      !name?.trim() ||
      !studentNumber?.trim() ||
      !course?.trim()
    ) {
      return res.status(400).json({
        message: "Please complete all student details.",
      });
    }

    const student = await Student.create({
      name: name.trim(),
      studentNumber: studentNumber.trim(),
      course: course.trim(),
    });

    res.status(201).json({
      message: "Student added successfully!",
      student,
    });
  } catch (error) {
    console.error("Add student error:", error);

    res.status(500).json({
      message: error.message || "Failed to save student.",
    });
  }
});


// Get all faculty
app.get("/api/faculty", async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.json(faculties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;