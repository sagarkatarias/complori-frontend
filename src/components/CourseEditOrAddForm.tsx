import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Box, TextField } from "@mui/material";
import { Course } from "../types/Api";
import { createCourse, updateCourseWithId } from "../api/Courses";

export default function CourseEditOrAddForm(props: {
  course: Course | null;
  variant: string;
}) {
  const { course, variant } = props;
  const [name, setName] = useState(course?.name);
  const [description, setDescription] = useState(course?.description);
  const [price, setPrice] = useState(course?.price);
  const [updated, setupdated] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const editCourse = async (id: number) => {
    const course = {
      name: name,
      description: description,
      price: price,
    };
    await updateCourseWithId(id, course).catch((error) => {
      console.log(error);
    });
    setupdated(true);
  };

  const addCourse = async () => {
    const course = {
      name: name,
      description: description,
      price: price,
    };
    await createCourse(course).catch((error) => {
      console.log(error);
    });
    setupdated(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (variant === "edit" && course) {
      await editCourse(course.id);
    } else {
      await addCourse();
    }
  };

  return (
    <Card sx={{ width: 600 }}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            marginTop: "1rem",
          }}
        >
          <Typography variant="h5">
            {variant === "add"
              ? "Add a new course"
              : ` Edit the course with id ${course?.id} and name ${course?.name}`}
          </Typography>
          <Box sx={{ padding: 5 }} display="column">
            <TextField
              label="Name"
              id="name"
              value={name}
              onChange={handleNameChange}
              size="small"
            />
            <TextField
              label="Description"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              size="small"
            />
            <TextField
              label="Price"
              id="price"
              value={price}
              onChange={handlePriceChange}
              size="small"
              type="number"
              inputProps={{
                min: 0,
                step: 1,
              }}
            />
          </Box>
          {!updated ? (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginBottom: 2 }}
            >
              {variant === "add" ? "Add" : "Edit"}
            </Button>
          ) : (
            <Alert
              action={
                <Button
                  color="inherit"
                  size="small"
                  onClick={() => setupdated(false)}
                >
                  {variant === "add" ? "Add new" : "Update again"}
                </Button>
              }
            >
              {variant === "add" ? "Add successfully" : "updated successfully"}
            </Alert>
          )}
        </Box>
      </form>
    </Card>
  );
}
