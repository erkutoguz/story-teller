import axios from "axios";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const apiClient = axios.create({
  baseURL: "/api",
});

apiClient.interceptors.response.use(
  function (res) {
    return res.data;
  },
  function (error) {
    let message = "";
    if (error.response?.status === 401) {
      toast("Please sign in");
      redirect("/sign-in");
    } else if (error.response?.status === 403) {
      message = "Pick a plan to use this feature";
    } else {
      message =
        error?.response?.data?.error || error.message || error.toString();
    }
    error.message = message;

    console.error(error.message);

    if (error.message) {
      toast.error(error.message);
    } else {
      toast.error("something went wrong...");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
