import axiosClient from "../axiosClient";

export interface Teacher {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  subject?: string;
  experience?: number;
  createdAt: string;
  updatedAt: string;
}

export const getAllTeachers = async () => {
  return await axiosClient.get("/teacher/get-all-teachers");
};
