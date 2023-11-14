import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseWithId } from "../api/Courses";
import CourseDetailCard from "../components/CourseDetailCard";

const CourseDetail = () => {
  const params = useParams();
  const courseId = params?.courseId;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await getCourseWithId(courseId as string);
      setData(response);
      setTimeout(() => {
        setLoading(false);
      }, 1400);
    }
    if (courseId) {
      fetchData();
    }
  }, [courseId]);

  if (loading) {
    return (
      <Box className="App">
        <CircularProgress />
      </Box>
    );
  }

  if (!data) {
    return <Box className="App">Course not found</Box>;
  }

  return (
    <Box className="App">
      <CourseDetailCard course={data}></CourseDetailCard>
    </Box>
  );
};

export default CourseDetail;
