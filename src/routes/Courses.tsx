import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { getCourses } from "../api/Courses";
import CourseCard from "../components/CourseCard";
import { Course } from "../types/Api";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await getCourses();
      setCourses(response);
    }
    fetchData();
  }, []);

  return (
    <Box className="App">
      <Button
        sx={{ marginTop: 4 }}
        variant="contained"
        color="success"
        onClick={() => navigate("/courses/add")}
      >
        Add a Course
      </Button>
      {courses.map((course: Course) => (
        <Box key={course.id} sx={{ padding: "1rem" }}>
          <CourseCard course={course} />
        </Box>
      ))}
    </Box>
  );
};

export default Courses;
