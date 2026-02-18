import axiosClient from "../axiosClient";

export interface Settings {
  id: string;
  key: string;
  value: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export const getSettings = async (): Promise<Settings[]> => {
  const res = await axiosClient.get("/settings/all");
  return res.data?.body || res.data;
};
