import axiosClient from "../axiosClient";

export interface Course {
  _id?: string;
  id?: string;
  name: string;
  description?: string;
  is_freeze?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export const getCourses = async (is_freeze: boolean = false): Promise<Course[]> => {
  const res = await axiosClient.get(`/course/get-courses?is_freeze=${is_freeze}`);
  return res.data?.body || res.data;
};

export const deleteCourse = async (course_id: string) => {
  const res = await axiosClient.delete("/course/delete-course", {
    data: { course_id },
  });
  return res.data;
};
