import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post(
    "/user/login",
    { email, password },
    { withCredentials: true }
  );
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};
export const signupUser = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await axios.post(
    "/user/signup",
    { name, email, password },
    { withCredentials: true }
  );
  if (res.status !== 200) {
    throw new Error("Unable to Signup");
  }
  const data = await res.data;
  return data;
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/user/auth-status");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  const data = await res.data;
  return data;
};

export const sendChatRequest = async (message: string) => {
  const res = await axios.post(
    "/chats/new",
    { message },
    { withCredentials: true }
  );
  if (res.status !== 200) {
    throw new Error("Unable to send Chat");
  }
  const data = await res.data;
  return data;
};

export const getUserChats = async () => {
  const res = await axios.get("/chats/all-chats");
  if (res.status !== 200) {
    throw new Error("Unable to send receive previous chats");
  }
  const data = await res.data;
  return data;
};

export const deleteUserChats = async () => {
  const res = await axios.delete("/chats/delete");
  if (res.status !== 200) {
    throw new Error("Unable to delete Chats");
  }
  const data = await res.data;
  return data;
};

export const logoutUser = async () => {
  const res = await axios.get("/user/logout");
  if (res.status !== 200) {
    throw new Error("Unable to delete Chats");
  }
  const data = await res.data;
  return data;
};
