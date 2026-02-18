import axiosClient from "../axiosClient";

export interface Student {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  group_id?: string;
  status?: string;
  createdAt: string;
  updatedAt: string;
}

export const getAllStudents = async (): Promise<Student[]> => {
  try {
    const res = await axiosClient.get("/student/get-all-students");
    return res.data;
  } catch (err) {
    console.error("O'quvchilarni olishda xatolik bo'ldi", err);
    throw err;
  }
};
