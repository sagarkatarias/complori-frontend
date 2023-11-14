import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Course } from "../types/Api";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IsoToDateString } from "../utils/Date";
import { getCoachWithId } from "../api/Coach";
import { useCallback, useEffect, useState } from "react";

export default function CourseDetailCard(props: { course: Course }) {
  const { course } = props;
  const navigate = useNavigate();
  const [coachName, setCoachName] = useState("");

  const renderCoachName = useCallback(async () => {
    if (course.coachId) {
      const coach = await getCoachWithId(`${course.coachId}`);
      return `Course is taught by the coach ${coach.name}`;
    }
    return "Coach not assigned";
  }, [course.coachId]);

  useEffect(() => {
    async function fetchData() {
      const coach = await renderCoachName();
      setCoachName(coach);
    }
    fetchData();
  }, [course.coachId, renderCoachName]);

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
        <Typography variant="body2">{`Course was updated on ${IsoToDateString(
          course.updatedAt
        )}`}</Typography>
        <Typography variant="body2">{`Course was created on ${IsoToDateString(
          course.createdAt
        )}`}</Typography>
        <Typography variant="body2">{`${coachName}`}</Typography>
      </CardContent>
      <Box display={"flex"}>
        <CardActions>
          <Button size="small" onClick={() => navigate(`/courses`)}>
            Courses
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
