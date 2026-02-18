import axiosClient from "../axiosClient";

export interface Payment {
  id: string;
  student_id: string;
  amount: number;
  payment_date: string;
  payment_method?: string;
  status: string;
  createdAt: string;
}

export const getPayments = async (): Promise<Payment[]> => {
  const res = await axiosClient.get("/payment/all");
  return res.data?.body || res.data;
};
