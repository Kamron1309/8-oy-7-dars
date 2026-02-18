import axiosClient from "../axiosClient";

export interface Admin {
  _id?: string;
  id?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  email?: string;
  role?: string;
  status?: string;
  createdAt?: string;
}

export interface Manager {
  _id?: string;
  id?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  email?: string;
  role?: string;
  status?: string;
  createdAt?: string;
}

export const getAllAdmins = async (): Promise<Admin[]> => {
  const response = await axiosClient.get("/staff/all-admins");
  return response.data;
};

export const getAllManagers = async () => {
  return await axiosClient.get("/staff/all-managers");
};
