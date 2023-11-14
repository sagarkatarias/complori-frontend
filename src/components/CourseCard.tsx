import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Course } from "../types/Api";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteCourseWithId } from "../api/Courses";

export default function CourseCard(props: { course: Course }) {
  const { course } = props;
  const navigate = useNavigate();

  const deleteCourse = async (id: number) => {
    await deleteCourseWithId(id);
    window.location.reload();
  };

  return (
    <Card sx={{ width: 600 }}>
      <CardContent>
        <Typography variant="h1" color="text.primary" gutterBottom>
          {course.name}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="green">
          {`${course.price} €`}
        </Typography>
        <Typography variant="body2">{course.description}</Typography>
      </CardContent>
      <Box display={"flex"}>
        <CardActions>
          <Button
            size="small"
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            Learn More
          </Button>
        </CardActions>
        <CardActions sx={{ marginLeft: "auto" }}>
          <Button
            size="small"
            onClick={() => deleteCourse(course.id)}
            color="error"
          >
            Delete
          </Button>
        </CardActions>
        <Box>
          <CardActions>
            <Button
              size="small"
              onClick={() => navigate(`/courses/${course.id}/edit`)}
            >
              EDIT
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
}
