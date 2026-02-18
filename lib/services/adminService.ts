import axiosClient from "../axiosClient";

export interface Admin {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface Manager {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export const getAllAdmins = async (): Promise<Admin[]> => {
  const response = await axiosClient.get<Admin[]>("/staff/all-admins");
  return response.data;
};

export const getAllManagers = async () => {
  return await axiosClient.get("/staff/all-managers");
};
