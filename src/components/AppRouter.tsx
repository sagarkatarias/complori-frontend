import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../routes/Login";
import SecuredRoute from "./SecuredRoute";
import Courses from "../routes/Courses";
import NotFound from "../routes/NotFound";
import CourseDetail from "../routes/CourseDetail";
import CourseEdit from "../routes/CourseEdit";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/courses"
        element={
          <SecuredRoute>
            <Courses />
          </SecuredRoute>
        }
      />
      <Route path="/courses/add" element={<CourseEdit variant={"add"} />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />
      <Route
        path="/courses/:courseId/edit"
        element={<CourseEdit variant={"edit"} />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
