import axiosClient from "../axiosClient";

export interface Group {
  id: string;
  name: string;
  course_id?: string;
  teacher_id?: string;
  students_count?: number;
  createdAt: string;
  updatedAt: string;
}

export const getAllGroups = async (): Promise<Group[]> => {
  const res = await axiosClient.get("/group/get-all-group");
  return res.data;
};
