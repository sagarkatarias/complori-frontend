import apiInstance from "./Axios";

export const getCoachWithId = async (id: string) => {
  const response = await apiInstance.get(`/coaches/${id}`);
  return response.data;
};
