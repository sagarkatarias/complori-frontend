import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseEditOrAddForm from "../components/CourseEditOrAddForm";
import { getCourseWithId } from "../api/Courses";

const CourseEdit = (props: { variant: string }) => {
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
    } else {
      setLoading(false);
    }
  }, [courseId]);

  if (loading) {
    return (
      <Box className="App">
        <CircularProgress />
      </Box>
    );
  }

  if (!data && props.variant === "edit") {
    return <Box className="App">Course not found</Box>;
  }
  return (
    <Box className="App">
      <CourseEditOrAddForm course={data} variant={props.variant} />
    </Box>
  );
};

export default CourseEdit;
