import { api } from "./axios";

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  token?: string;
  accessToken?: string;
};

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>("/auth/login", payload);
  return data;
}
