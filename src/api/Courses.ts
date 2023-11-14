import { Course } from "../types/Api";
import apiInstance from "./Axios";

export const getCourses = async () => {
  const response = await apiInstance.get("/courses");
  return response.data;
};

export const getCourseWithId = async (id: string) => {
  const response = await apiInstance.get(`/courses/${id}`);
  return response.data;
};

export const createCourse = async (payload: Partial<Course>) => {
  const response = await apiInstance.post(`/courses`, payload);
  return response.data;
};

export const updateCourseWithId = async (
  id: number,
  payload: Partial<Course>
) => {
  const response = await apiInstance.patch(`/courses/${id}`, payload);
  return response.data;
};

export const deleteCourseWithId = async (id: number) => {
  const response = await apiInstance.delete(`/courses/${id}`);
  return response.data;
};
